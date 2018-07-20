import fetch from 'isomorphic-fetch'
import { SET_BUZZWORDS, RESET_NEW_BUZZWORD_FORM } from '../constants'
const url = 'http://localhost:5000/buzzwords'

export const setBuzzWords = async (dispatch, getState) => {
  const buzzwords = await fetch(url).then(res => res.json())
  dispatch({ type: SET_BUZZWORDS, payload: buzzwords })
}

export const addBuzzword = (history, buzzword) => async (
  dispatch,
  getState
) => {
  console.log(buzzword)
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(buzzword)

  const result = await fetch(url, { headers, method, body })
    .then(res => {
      console.log(res.body)
      return res.json()
    })
    .catch(err => console.log(err))

  if (result.ok) {
    dispatch(setBuzzWords)
    dispatch({ type: RESET_NEW_BUZZWORD_FORM })
    history.push('/buzzwords')
  } else {
    alert(result.msg)
    history.push('/buzzwords')
  }
}
