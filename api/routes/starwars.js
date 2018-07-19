const starwars = require("starwars-names");
const { map, prop } = require("ramda");
const uuid = require("uuid");

const swList = prop("all", starwars);

const createSW = sw => ({
  id: uuid.v4(),
  name: sw
});

const swChars = map(createSW, swList);

module.exports = app => {
  app.get("/starwars", (req, res) => res.send(swChars));
};
