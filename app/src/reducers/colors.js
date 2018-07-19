import { SET_COLORS } from '../constants'

export const colors = (state = [], action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.payload
    default:
      return state
  }
}
