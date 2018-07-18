const csscolorsObj = require("css-color-names")
const { map, keys, prop } = require("ramda")
const uuid = require("uuid")
// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})

const colors = map(createColor, keys(csscolorsObj))

module.exports = app => {
  app.get("/colors", (req, res) => {
    res.send(colors)
  })
}
