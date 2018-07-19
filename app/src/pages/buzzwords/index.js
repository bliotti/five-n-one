import React from 'react'
import fetch from 'isomorphic-fetch'
import Component from '@reactions/component'
import uuid from 'uuid'
import { map } from 'ramda'

const li = buzzword => <li key={uuid.v4()}>{buzzword}</li>

const BuzzWords = props => (
  <Component
    initialState={{ buzzwords: [] }}
    didMount={({ state, setState }) => {
      fetch('http://localhost:5000/buzzwords')
        .then(res => res.json())
        .then(buzzwords => setState({ buzzwords }))
        .catch(err => console.log(err))
    }}
  >
    {({ setState, state }) => (
      <div>
        <header>Buzzwords</header>
        <ul>{map(li, state.buzzwords)}</ul>
      </div>
    )}
  </Component>
)

export default BuzzWords
