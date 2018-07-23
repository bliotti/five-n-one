const cookiesList = require('fortune-cookie')
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

const createCookies = c => ({
  id: uuid.v4(),
  name: c
})

let cookies = map(createCookies, cookiesList)

module.exports = app => {
  app.get('/cookies', (req, res) => res.send(cookies))
  app.post('/cookies', bodyParser.json(), (req, res) => {
    let newCookie = propOr({}, 'body', req)
    if (isEmpty(newCookie)) {
      res.status(500).send({
        ok: false,
        msg:
          'You are missing a valid JSON document {id, name} in your request body.'
      })
      return
    }
    newCookie = merge(newCookie, { id: uuid.v4() })
    cookies = compose(
      sort(ascend(prop('name'))),
      append(newCookie)
    )(cookies)
    res.status(201).send({ ok: true })
  })
}
