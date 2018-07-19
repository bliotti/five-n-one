import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from './reducers/colors'
import { buzzwords } from './reducers/buzzwords'
import { starwars } from './reducers/starwars'
import { cookies } from './reducers/cookies'
import { emojis } from './reducers/emojis'

export default createStore(
  combineReducers({
    colors,
    buzzwords,
    starwars,
    cookies,
    emojis
  }),
  applyMiddleware(thunk)
)
