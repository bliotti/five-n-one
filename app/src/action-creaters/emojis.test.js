import { SET_EMOJIS } from "../constants";
import { setEmojis } from "./emojis";

test("emojis", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_EMOJIS);
    expect(action.payload.length).toBeGreaterThan(0);
  }
  setEmojis(mockDispatch);
});
