const buzzwordsList = require('buzzwords')
const bodyParser = require('body-parser')
const {
  map,
  propOr,
  isEmpty,
  append,
  sort,
  ascend,
  prop,
  compose,
  merge
} = require('ramda')
const uuid = require('uuid')

let createBuzzwords = bw => ({
  id: uuid.v4(),
  name: bw
})

let buzzwords = map(createBuzzwords, buzzwordsList)

module.exports = app => {
  app.get('/buzzwords', (req, res) => res.send(buzzwords))

  app.post('/buzzwords', bodyParser.json(), (req, res) => {
    let newBuzzword = propOr({}, 'body', req)
    console.log(JSON.stringify(newBuzzword))
    if (isEmpty(newBuzzword)) {
      console.log('in error branch')
      res.status(500).send({
        ok: false,
        msg: 'Must include json object with a name field in request body.'
      })
      return
    }

    newBuzzword = merge(newBuzzword, { id: uuid.v4() })
    buzzwords = compose(
      sort(ascend(prop('name'))),
      append(newBuzzword)
    )(buzzwords)
    console.log(JSON.stringify(newBuzzword))
    res.status(201).send({ ok: true })
  })
}
