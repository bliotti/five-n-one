const cookiesList = require("fortune-cookie");
const { map } = require("ramda");
const uuid = require("uuid");

const createCookies = c => ({
  id: uuid.v4(),
  name: c
});

const cookies = map(createCookies, cookiesList);

module.exports = app => {
  app.get("/cookies", (req, res) => res.send(cookies));
};
