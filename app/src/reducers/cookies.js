import {
  SET_COOKIES,
  RESET_NEW_COOKIE_FORM,
  CHG_CURRENT_COOKIE
} from '../constants'
import { merge } from 'ramda'

export const cookies = (state = [], action) => {
  switch (action.type) {
    case SET_COOKIES:
      return action.payload
    default:
      return state
  }
}

export const currentCookie = (state = {}, action) => {
  switch (action.type) {
    case CHG_CURRENT_COOKIE:
      return merge(state, action.payload)
    case RESET_NEW_COOKIE_FORM:
      return {}
    default:
      return state
  }
}
