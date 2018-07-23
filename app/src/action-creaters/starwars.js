import {
  SET_STARWARS,
  IS_FETCHING,
  DONE_FETCHING,
  RESET_NEW_STARWARS_FORM
} from '../constants'
import fetch from 'isomorphic-fetch'

const url = 'http://localhost:5000/starwars'

export const setStarwars = (dispatch, getState) =>
  fetch(url)
    .then(res => res.json())
    .then(starwars => dispatch({ type: SET_STARWARS, payload: starwars }))

export const addStarwars = (history, starwars) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(starwars)

  dispatch({ type: IS_FETCHING })
  const result = await fetch(url, { headers, method, body }).then(res =>
    res.json()
  )

  dispatch({ type: DONE_FETCHING })

  if (result.ok) {
    dispatch(setStarwars)
    dispatch({ type: RESET_NEW_STARWARS_FORM })
    history.push('/starwars')
  } else {
    alert(result.msg)
  }
}
