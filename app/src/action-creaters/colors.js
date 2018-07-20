import fetch from 'isomorphic-fetch'
import {
  SET_COLORS,
  CHG_CURRENT_COLOR,
  RESET_NEW_COLOR_FORM
} from '../constants'

const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COLORS, payload: colors })
}

export const addColor = (color, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json' }
  const method = 'POST'
  const body = JSON.stringify(color)

  const result = await fetch(url, { headers, method, body })
    .then(res => res.json())
    .catch(err => console.log(err))

  if (result.ok) {
    dispatch(setColors)
    dispatch({ type: RESET_NEW_COLOR_FORM })
    history.push('/colors')
  } else {
    alert(result.msg)
    history.push('/colors')
  }
}

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({ type: CHG_CURRENT_COLOR, payload: { [field]: value } })
}
