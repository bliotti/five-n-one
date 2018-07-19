import { SET_STARWARS } from "../constants";
import { setStarwars } from "./starwars";

test("starwars test", () => {
  function mockDispatch(action) {
    expect(action.type).toBe(SET_STARWARS);
    expect(action.payload.length).toBeGreaterThan(0);
  }
  setStarwars(mockDispatch);
});
