import fetch from 'isomorphic-fetch'
import {
  SET_COOKIES,
  IS_FETCHING,
  RESET_NEW_COOKIE_FORM,
  DONE_FETCHING
} from '../constants'
const url = 'http://localhost:5000/cookies'

export const setCookies = (dispatch, getState) => {
  fetch(url)
    .then(res => res.json())
    .then(cookies => dispatch({ type: SET_COOKIES, payload: cookies }))
}

export const addCookie = (history, cookie) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(cookie)

  dispatch({ type: IS_FETCHING })
  const result = await fetch(url, { headers, method, body }).then(res =>
    res.json()
  )
  dispatch({ type: DONE_FETCHING })
  if (result.ok) {
    dispatch(setCookies)
    dispatch({ type: RESET_NEW_COOKIE_FORM })
    history.push('/cookies')
  } else {
    alert(result.msg)
  }
}
