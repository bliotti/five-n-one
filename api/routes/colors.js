const csscolorsObj = require('css-color-names')
const {
  map,
  keys,
  prop,
  append,
  isNil,
  sort,
  ascend,
  find,
  reject
} = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

// create color document
const createColor = k => ({
  id: uuid.v4(),
  name: k,
  value: prop(k, csscolorsObj)
})

let colors = map(createColor, keys(csscolorsObj))

module.exports = app => {
  app.get('/colors', (req, res) => {
    res.send(colors)
  })
  app.post('/colors', bodyParser.json(), (req, res) => {
    if (isNil(req.body)) {
      res.status(500).send({
        ok: false,
        msg: 'Must have a JSON document to POST in the format {id, name, value}'
      })
      return
    } else {
      req.body.id = uuid.v4()
      colors = append(req.body, colors)
      colors = sort(ascend(prop('name')), colors)
      res.status(201).send({
        ok: true
      })
    }
  })
  app.get('/colors/:id', (req, res) => {
    const foundColor = find(c => c.id === req.params.id, colors)
    res.send(foundColor)
  })
  app.delete('/colors/:id', (req, res) => {
    const updatedColors = reject(c => c.id === req.params.id, colors)

    if (updatedColors.length === colors.length) {
      res.status(500).send({
        ok: false,
        msg:
          'Your ID did not match any colors in the database, nothing was deleted'
      })
      return
    }
    colors = updatedColors
    res.status(200).send({ ok: true })
  })
}
