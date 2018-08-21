import {
  SET_STARWARS,
  CHG_CURRENT_STARWARS,
  RESET_NEW_STARWARS_FORM
} from '../constants'
import { merge } from 'ramda'

export const starwars = (state = [], action) => {
  switch (action.type) {
    case SET_STARWARS:
      return action.payload
    default:
      return state
  }
}

export const currentStarwars = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_STARWARS:
      return merge(state, action.payload)
    case RESET_NEW_STARWARS_FORM:
      return {}
    default:
      return state
  }
}
