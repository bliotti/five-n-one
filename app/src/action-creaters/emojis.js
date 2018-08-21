import {
  SET_EMOJIS,
  IS_FETCHING,
  DONE_FETCHING,
  RESET_NEW_EMOJI_FORM,
  CHG_CURRENT_EMOJI
} from "../constants";
import fetch from "isomorphic-fetch";
const url = "http://localhost:5000/emojis";

export const setEmojis = (dispatch, getState) =>
  fetch(url)
    .then(res => res.json())
    .then(emojis => dispatch({ type: SET_EMOJIS, payload: emojis }));

export const addEmoji = (history, emoji) => async (dispatch, getState) => {
  const headers = { "Content-Type": "application/json" };
  const method = "POST";
  const body = JSON.stringify(emoji);

  dispatch({ type: IS_FETCHING });

  const result = await fetch(url, { headers, method, body }).then(res =>
    res.json()
  );

  dispatch({ type: DONE_FETCHING });

  if (result.ok) {
    dispatch(setEmojis);
    dispatch({ type: RESET_NEW_EMOJI_FORM });
    history.push("/emojis");
  } else {
    alert(result.msg);
  }
};

export const getEmoji = id => async (dispatch, getState) => {
  const emoji = await fetch(url + "/" + id).then(res => res.json());
  dispatch({ type: CHG_CURRENT_EMOJI, payload: emoji });
};
