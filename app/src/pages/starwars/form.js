import React from 'react'
import { connect } from 'react-redux'
import Form from '../../components/form'
import { CHG_CURRENT_STARWARS } from '../../constants'
import { addStarwars } from '../../action-creaters/starwars'

const StarwarsForm = props => (
  <div>
    {!props.isFetching ? (
      <React.Fragment>
        <marquee>Add new Star Wars character.</marquee>
        <Form
          onChange={props.onChange}
          onSubmit={props.onSubmit(props.history)}
          cancelURL="/starwars"
          {...props.currentStarwars}
        />
      </React.Fragment>
    ) : (
      <p>Adding.....</p>
    )}
  </div>
)

const mapStateToProps = state => ({
  currentStarwars: state.currentStarwars,
  isFetching: state.isFetching
})

const mapActionToProps = dispatch => ({
  onChange: (field, value) => {
    dispatch({ type: CHG_CURRENT_STARWARS, payload: { [field]: value } })
  },
  onSubmit: history => value => dispatch(addStarwars(history, value))
})

export default connect(
  mapStateToProps,
  mapActionToProps
)(StarwarsForm)
