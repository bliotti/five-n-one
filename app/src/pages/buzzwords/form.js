import React from 'react'
import { connect } from 'react-redux'
import { CHG_CURRENT_BUZZWORD } from '../../constants'
import { addBuzzword } from '../../action-creaters/buzzwords'
import Form from '../../components/form'

const BuzzwordsForm = ({
  onChange,
  onSubmit,
  history,
  currentBuzzword,
  isFetching
}) => (
  <div>
    {!isFetching ? (
      <React.Fragment>
        <h1>Add a New Buzzword</h1>
        <Form
          onChange={onChange}
          onSubmit={onSubmit(history)}
          {...currentBuzzword}
          cancelURL={'/buzzwords'}
        />
      </React.Fragment>
    ) : (
      <p>Adding new buzzword...</p>
    )}
  </div>
)

const mapStateToProps = state => ({
  currentBuzzword: state.currentBuzzword,
  isFetching: state.isFetching
})

const mapActionsToProps = dispatch => ({
  onChange: (field, value) => {
    dispatch({
      type: CHG_CURRENT_BUZZWORD,
      payload: { [field]: value }
    })
  },
  onSubmit: history => buzzword => dispatch(addBuzzword(history, buzzword))
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(BuzzwordsForm)
