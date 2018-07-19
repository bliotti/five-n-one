import React from 'react'
import { connect } from 'react-redux'
import { map } from 'ramda'

const li = color => {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

const Colors = props => (
  <div>
    <h1>Colors</h1>
    <ul>{map(li, props.colors)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { colors: state.colors }
}

export default connect(mapStateToProps)(Colors)
