import {
  SET_EMOJIS,
  CHG_CURRENT_EMOJI,
  RESET_NEW_EMOJI_FORM
} from '../constants'
import { merge } from 'ramda'

export const emojis = (state = [], action) => {
  switch (action.type) {
    case SET_EMOJIS:
      return action.payload
    default:
      return state
  }
}

export const currentEmoji = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_EMOJI:
      return merge(state, action.payload)
    case RESET_NEW_EMOJI_FORM:
      return {}
    default:
      return state
  }
}
