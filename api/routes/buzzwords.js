const buzzwords = require("buzzwords")

module.exports = app => {
  app.get("/buzzwords", (req, res) => res.send(buzzwords))
}
