import React from 'react'
import { connect } from 'react-redux'
import Form from '../../components/form'
import { CHG_CURRENT_COOKIE } from '../../constants'
import { addCookie } from '../../action-creaters/fortune-cookies'

const CookieForm = props => {
  return (
    <div>
      {!props.isFetching ? (
        <React.Fragment>
          <h1>Add a new fortune cookie</h1>
          <Form
            {...props.currentCookie}
            onChange={props.onChange}
            onSubmit={props.onSubmit(props.history)}
            cancelURL="/cookies"
          />
        </React.Fragment>
      ) : (
        'Adding new fortune cookie...........................................'
      )}
    </div>
  )
}

const mapStateToProps = state => ({
  currentCookie: state.currentCookie,
  isFetching: state.isFetching
})

const mapActionsToProps = dispatch => ({
  onChange: (field, value) => {
    dispatch({ type: CHG_CURRENT_COOKIE, payload: { [field]: value } })
  },
  onSubmit: history => value => {
    dispatch(addCookie(history, value))
  }
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(CookieForm)
