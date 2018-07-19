import { SET_STARWARS } from "../constants";
import fetch from "isomorphic-fetch";

const url = "http://localhost:5000/starwars";

export const setStarwars = (dispatch, getState) =>
  fetch(url)
    .then(res => res.json())
    .then(starwars => dispatch({ type: SET_STARWARS, payload: starwars }));
