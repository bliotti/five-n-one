const starwars = require("starwars-names")

const { prop } = require("ramda")

const swNames = prop("all", starwars)

module.exports = app => {
  app.get("/starwars", (req, res) => res.send(swNames))
}
