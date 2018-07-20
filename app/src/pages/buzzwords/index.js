import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = buzzword => <li key={buzzword.id}>{buzzword.name}</li>

const BuzzWords = props => (
  <div>
    <h1>Buzzwords</h1>
    <Link to="/buzzwords/new">Add Buzzword</Link>
    <ul>{map(li, props.buzzwords)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { buzzwords: state.buzzwords }
}

export default connect(mapStateToProps)(BuzzWords)
