import fetch from 'isomorphic-fetch'
import {
  SET_BUZZWORDS,
  RESET_NEW_BUZZWORD_FORM,
  IS_FETCHING,
  DONE_FETCHING
} from '../constants'
const url = 'http://localhost:5000/buzzwords'

export const setBuzzWords = async (dispatch, getState) => {
  const buzzwords = await fetch(url).then(res => res.json())
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords })
}

export const addBuzzword = (history, buzzword) => async (
  dispatch,
  getState
) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(buzzword)

  dispatch({ type: IS_FETCHING })

  const result = await fetch(url, { headers, method, body })
    .then(res => {
      return res.json()
    })
    .catch(err => console.log(err))

  dispatch({ type: DONE_FETCHING })

  if (result.ok) {
    dispatch(setBuzzWords)
    dispatch({ type: RESET_NEW_BUZZWORD_FORM })
    history.push('/buzzwords')
  } else {
    alert(result.msg)
  }
}
