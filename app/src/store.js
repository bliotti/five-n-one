import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { isFetching } from './reducers/loading'
import { colors, currentColor } from './reducers/colors'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { starwars, currentStarwars } from './reducers/starwars'
import { cookies, currentCookie } from './reducers/cookies'
import { emojis, currentEmoji } from './reducers/emojis'

export default createStore(
  combineReducers({
    currentStarwars,
    currentCookie,
    isFetching,
    colors,
    currentColor,
    buzzwords,
    currentBuzzword,
    starwars,
    cookies,
    emojis,
    currentEmoji
  }),
  applyMiddleware(thunk)
)
