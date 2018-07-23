import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { isFetching } from './reducers/loading'
import { colors, currentColor } from './reducers/colors'
import { buzzwords, currentBuzzword } from './reducers/buzzwords'
import { starwars } from './reducers/starwars'
import { cookies } from './reducers/cookies'
import { emojis, currentEmoji } from './reducers/emojis'

export default createStore(
  combineReducers({
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
