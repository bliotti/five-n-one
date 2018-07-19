import fetch from 'isomorphic-fetch'
import { SET_COLORS } from '../constants'
const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({ type: SET_COLORS, payload: colors })
}
