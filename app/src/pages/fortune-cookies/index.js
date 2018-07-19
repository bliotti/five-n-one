import React from 'react'
import uuid from 'uuid'
import { map } from 'ramda'
import Component from '@reactions/component'
import { link } from 'fs'

const li = cookie => <li key={uuid.v4()}>{cookie}</li>

const Cookies = props => (
  <Component
    initialState={{ cookies: [] }}
    didMount={({ state, setState }) =>
      fetch('http://localhost:5000/cookies')
        .then(res => res.json())
        .then(cookies => setState({ cookies }))
    }
  >
    {({ state, setState }) => (
      <div>
        <header>Fortune Sayings for the Unfortunate</header>
        <ul>{map(li, state.cookies)}</ul>
      </div>
    )}
  </Component>
)

export default Cookies
