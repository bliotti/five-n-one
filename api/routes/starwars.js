const starwars = require('starwars-names')
const {
  map,
  propOr,
  isEmpty,
  merge,
  compose,
  append,
  ascend,
  prop,
  sort
} = require('ramda')
const uuid = require('uuid')
const bodyParser = require('body-parser')

const swList = prop('all', starwars)

const createSW = sw => ({
  id: uuid.v4(),
  name: sw
})

let swChars = map(createSW, swList)

module.exports = app => {
  app.get('/starwars', (req, res) => res.send(swChars))
  app.post('/starwars', bodyParser.json(), (req, res) => {
    let newSWChar = propOr({}, 'body', req)
    if (isEmpty(newSWChar)) {
      res.status(500).send({
        ok: false,
        msg:
          'Please provide proper JSON documentation, {id, name} in the request body.'
      })
      return
    }
    newSWChar = merge(newSWChar, { id: uuid.v4() })
    swChars = compose(
      sort(ascend(prop('name'))),
      append(newSWChar)
    )(swChars)
    res.status(201).send({ ok: true })
  })
}
