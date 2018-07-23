const emojisList = require('emojis-list')
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

const createEmojis = e => ({
  id: uuid.v4(),
  name: e
})

let emojis = map(createEmojis, emojisList)

module.exports = app => {
  app.get('/emojis', (req, res) => res.send(emojis))
  app.post('/emojis', bodyParser.json(), (req, res) => {
    let newEmoji = propOr({}, 'body', req)

    if (isEmpty(newEmoji)) {
      res.status(500).send({
        ok: false,
        msg:
          'Please provide a proper JSON document {id, name} in the request body.'
      })
      return
    }
    newEmoji = merge(newEmoji, { id: uuid.v4() })
    emojis = compose(
      sort(ascend(prop('name'))),
      append(newEmoji)
    )(emojis)
    res.status(201).send({ ok: true })
  })
}
