import React from "react";
import fetch from "isomorphic-fetch";
import Component from "@reactions/component";
import { map } from "ramda";
import uuid from "uuid";

const li = emoji => <li key={emoji.id}>{emoji.name}</li>;

const Emojis = props => (
  <Component
    initialState={{ emojis: [] }}
    didMount={({ state, setState }) =>
      fetch("http://localhost:5000/emojis")
        .then(res => res.json())
        .then(emojis => setState({ emojis }))
    }
  >
    {({ state, setState }) => (
      <div>
        <ul>{map(li, state.emojis)}</ul>
      </div>
    )}
  </Component>
);

export default Emojis;
