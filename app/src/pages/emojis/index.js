import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = emoji => <li key={emoji.id}>{emoji.name}</li>

const Emojis = props => (
  <div>
    <ul>{map(li, props.emojis)}</ul>
  </div>
)

const mapStateToProps = state => ({
  emojis: state.emojis
})
export default connect(mapStateToProps)(Emojis)
