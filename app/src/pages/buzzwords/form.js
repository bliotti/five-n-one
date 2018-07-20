import React from 'react'
import { connect } from 'react-redux'
import { CHG_CURRENT_BUZZWORD } from '../../constants'
import { addBuzzword } from '../../action-creaters/buzzwords'
import Form from '../../components/form'

const BuzzwordsForm = ({ onChange, onSubmit, history, currentBuzzword }) => (
  <div>
    <h1>Add a New Buzzword</h1>
    <Form
      onChange={onChange}
      onSubmit={onSubmit(history)}
      {...currentBuzzword}
      cancelURL={'/buzzwords'}
    />
  </div>
)

const mapStateToProps = state => ({
  currentBuzzword: state.currentBuzzword
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
