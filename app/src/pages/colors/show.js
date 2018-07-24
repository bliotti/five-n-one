import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Component from '@reactions/component'
import { getColor, removeColor } from '../../action-creaters/colors'

const ShowColor = props => (
  <Component didMount={() => props.getColor(props.match.params.id)}>
    {() =>
      props.currentColor.id === props.match.params.id ? (
        <div style={{ backgroundColor: props.currentColor.value }}>
          <h1>{props.currentColor.name}</h1>
          <Link to={`/colors/${props.currentColor.id}/edit`}>
            <button>Edit</button>
          </Link>
          <button
            onClick={e =>
              props.removeColor(props.currentColor.id, props.history)
            }
          >
            Remove
          </button>
        </div>
      ) : (
        <h1>Loading Color...</h1>
      )
    }
  </Component>
)

const mapStateToProps = state => {
  return {
    currentColor: state.currentColor
  }
}

const mapActionToProps = dispatch => {
  return {
    getColor: id => dispatch(getColor(id)),
    removeColor: (id, history) =>
      window.confirm('Are you sure you want to delete?')
        ? dispatch(removeColor(id, history))
        : null
  }
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowColor)
