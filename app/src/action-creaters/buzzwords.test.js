import { SET_BUZZWORDS } from '../constants'
import { setBuzzWords } from './buzzwords'

test('MUH BUZZ BUZZ TEST YALL', () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_BUZZWORDS)
    expect(action.payload.length).toBeGreaterThan(0)
  }
  setBuzzWords(mockDispatch)
})
