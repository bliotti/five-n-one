import { SET_EMOJIS } from "../constants";
import fetch from "isomorphic-fetch";
const url = "http://localhost:5000/emojis";

export const setEmojis = (dispatch, getState) =>
  fetch(url)
    .then(res => res.json())
    .then(emojis => dispatch({ type: SET_EMOJIS, payload: emojis }));
