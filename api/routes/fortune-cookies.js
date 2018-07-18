const fortuneCookies = require("fortune-cookie")

module.exports = app => {
  app.get("/cookies", (req, res) => res.send(fortuneCookies))
}
