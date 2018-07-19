import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = cookie => <li key={cookie.id}>{cookie.name}</li>

const Cookies = props => (
  <div>
    <header>Fortune Sayings for the Unfortunate</header>
    <ul>{map(li, props.cookies)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { cookies: state.cookies }
}

export default connect(mapStateToProps)(Cookies)
