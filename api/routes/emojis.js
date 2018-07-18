const emojis = require("emojis-list")

module.exports = app => {
  app.get("/emojis", (req, res) => res.send(emojis))
}
