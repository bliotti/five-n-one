import fetch from "isomorphic-fetch";
import { SET_COOKIES } from "../constants";
const url = "http://localhost:5000/cookies";

export const setCookies = (dispatch, getState) => {
  fetch(url)
    .then(res => res.json())
    .then(cookies => dispatch({ type: SET_COOKIES, payload: cookies }));
};
