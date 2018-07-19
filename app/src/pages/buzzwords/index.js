import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = buzzword => <li key={buzzword.id}>{buzzword.name}</li>

const BuzzWords = props => (
  <div>
    <header>Buzzwords</header>
    <ul>{map(li, props.buzzwords)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords }
}

export default connect(mapStateToProps)(BuzzWords)
