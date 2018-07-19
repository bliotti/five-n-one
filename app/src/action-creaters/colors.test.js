import { setColors } from './colors'
import { SET_COLORS } from '../constants'

test('get and dispatch color from the api server', () => {
  const mockDispatch = action => {
    expect(action.type).toBe(SET_COLORS)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setColors(mockDispatch)
})
