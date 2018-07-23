import React from 'react'
import { map } from 'ramda'
import { connect } from 'react-redux'

const li = sw => <li key={sw.id}>{sw.name}</li>

const StarWars = props => (
  <div>
    {/* eslint-disable-next-line */}
    <marquee direction="right">
      {/* eslint-disable-next-line */}
      <marquee direction="up">🚀Star Wars 🚀</marquee>
    </marquee>
    <ul>{map(li, props.swNames)}</ul>
  </div>
)

const mapStateToProps = state => {
  return { swNames: state.starwars }
}

export default connect(mapStateToProps)(StarWars)
