import { SET_COOKIES } from "../constants";
import { setCookies } from "./fortune-cookies";

test("reading fortune", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_COOKIES);
    expect(action.payload.length).toBeGreaterThan(0);
  }
  setCookies(mockDispatch);
});
