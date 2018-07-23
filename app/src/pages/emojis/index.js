import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const li = emoji => <li key={emoji.id}>{emoji.name}</li>

const Emojis = props => (
  <div>
    <h1>Emojis</h1>
    <Link to="/emojis/new">Add a New Emoji</Link>
    <ul>{map(li, props.emojis)}</ul>
  </div>
)

const mapStateToProps = state => ({
  emojis: state.emojis
})
export default connect(mapStateToProps)(Emojis)
