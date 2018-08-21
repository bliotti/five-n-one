const buzzwordsList = require("buzzwords");
const bodyParser = require("body-parser");
const {
  map,
  propOr,
  isEmpty,
  append,
  sort,
  ascend,
  prop,
  compose,
  merge,
  find,
  propEq
} = require("ramda");
const uuid = require("uuid");

let createBuzzwords = bw => ({
  id: uuid.v4(),
  name: bw
});

let buzzwords = map(createBuzzwords, buzzwordsList);

module.exports = app => {
  app.get("/buzzwords", (req, res) => res.send(buzzwords));

  app.post("/buzzwords", bodyParser.json(), (req, res) => {
    let newBuzzword = propOr({}, "body", req);
    if (isEmpty(newBuzzword)) {
      res.status(500).send({
        ok: false,
        msg: "Must include json object with a name field in request body."
      });
      return;
    }

    newBuzzword = merge(newBuzzword, { id: uuid.v4() });
    buzzwords = compose(
      sort(ascend(prop("name"))),
      append(newBuzzword)
    )(buzzwords);
    res.status(201).send({ ok: true });
  });

  app.get("/buzzwords/:id", (req, res) => {
    const foundBuzzword = find(propEq("id", req.params.id), buzzwords);
    res.status(200).send(foundBuzzword);
  });
};
