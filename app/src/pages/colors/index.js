import React from "react"
import { connect } from "react-redux"
import { map } from "ramda"
import { Link } from "react-router-dom"

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
    <Link to="/colors/new">Add New Color</Link>
    <ul>{map(li, props.colors)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { colors: state.colors }
}

export default connect(mapStateToProps)(Colors)
