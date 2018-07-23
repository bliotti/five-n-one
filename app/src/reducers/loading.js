import { IS_FETCHING, DONE_FETCHING } from '../constants'

export const isFetching = (state = false, action) => {
  switch (action.type) {
    case IS_FETCHING:
      return true
    case DONE_FETCHING:
      return false
    default:
      return state
  }
}
