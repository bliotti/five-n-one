import React from "react";
import { map } from "ramda";
import Component from "@reactions/component";
import fetch from "isomorphic-fetch";
import uuid from "uuid";
import { link } from "fs";

const li = sw => <li key={sw.id}>{sw.name}</li>;

const StarWars = props => (
  <Component
    initialState={{ swNames: [] }}
    didMount={({ state, setState }) =>
      fetch("http://localhost:5000/starwars")
        .then(res => res.json())
        .then(swNames => setState({ swNames }))
    }
  >
    {({ state, setState }) => (
      <div>
        <marquee direction="right">🚀 Star Wars 🚀</marquee>
        <ul>{map(li, state.swNames)}</ul>
      </div>
    )}
  </Component>
);

export default StarWars;
