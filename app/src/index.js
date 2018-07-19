import React from 'react'
import { Provider } from 'react-redux'
import store from './store'
import { render } from 'react-dom'
import 'tachyons'
import { setColors } from './action-creaters/colors'
import { setBuzzWords } from './action-creaters/buzzwords'
import { setStarwars } from './action-creaters/starwars'
import { setCookies } from './action-creaters/fortune-cookies'
import { setEmojis } from './action-creaters/emojis'

import App from './App'

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

store.dispatch(setColors)
store.dispatch(setBuzzWords)
store.dispatch(setStarwars)
store.dispatch(setCookies)
store.dispatch(setEmojis)
