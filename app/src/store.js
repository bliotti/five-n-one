import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors, currentColor } from './reducers/colors'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { starwars } from './reducers/starwars'
import { cookies } from './reducers/cookies'
import { emojis } from './reducers/emojis'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    starwars,
    cookies,
    emojis
  }),
  applyMiddleware(thunk)
)
