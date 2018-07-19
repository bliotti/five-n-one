const buzzwordsList = require("buzzwords");
const { map } = require("ramda");
const uuid = require("uuid");

const createBuzzwords = bw => ({
  id: uuid.v4(),
  name: bw
});

const buzzwords = map(createBuzzwords, buzzwordsList);

module.exports = app => {
  app.get("/buzzwords", (req, res) => res.send(buzzwords));
};
