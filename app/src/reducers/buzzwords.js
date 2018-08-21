import {
  SET_BUZZWORDS,
  RESET_NEW_BUZZWORD_FORM,
  CHG_CURRENT_BUZZWORD
} from '../constants'
import { merge } from 'ramda'

export const buzzwords = (state = [], action) => {
  switch (action.type) {
    case SET_BUZZWORDS:
      return action.payload
    default:
      return state
  }
}

export const currentBuzzword = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_BUZZWORD:
      return merge(state, action.payload)
    case RESET_NEW_BUZZWORD_FORM:
      return {}
    default:
      return state
  }
}
