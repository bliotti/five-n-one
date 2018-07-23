import React from 'react'
import { connect } from 'react-redux'
import Form from '../../components/form'
import { CHG_CURRENT_EMOJI } from '../../constants'
import { addEmoji } from '../../action-creaters/emojis'

const EmojiForm = props => (
  <div>
    {!props.isFetching ? (
      <React.Fragment>
        <h1>Add a New Emoji</h1>
        <Form
          onChange={props.onChange}
          onSubmit={props.onSubmit(props.history)}
          cancelURL="/emojis"
          {...props.currentEmoji}
        />
      </React.Fragment>
    ) : (
      <p>Adding new emoji...</p>
    )}
  </div>
)

const mapStateToProps = state => ({
  currentEmoji: state.currentEmoji,
  isFetching: state.isFetching
})

const mapActionsToProps = dispatch => ({
  onChange: (field, value) =>
    dispatch({ type: CHG_CURRENT_EMOJI, payload: { [field]: value } }),
  onSubmit: history => value => dispatch(addEmoji(history, value))
})

export default connect(
  mapStateToProps,
  mapActionsToProps
)(EmojiForm)
