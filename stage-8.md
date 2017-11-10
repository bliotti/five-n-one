# Stage 8

Editing Components

In this stage we want to implement the ability to edit a domain. We are going to re-use our form component and we are going to create a EditColorForm Component.

In the `app/src/pages/colors` directory create a new file called `edit-form.js`

In the `edit-form.js` lets build the following container component

``` js
import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { getColor, chgColor, updateColor } from '../../action-creators/colors'

class EditColorForm extends React.Component {
  componentDidMount () {
    const id = this.props.match.params.id
    this.props.getColor(id)
  }
  render() {
    const props = this.props
    return (
      <div>
        <h1>Edit Color</h1>
        <Form {...props} onSubmit={color => props.onSubmit(color, props.history)} />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentColor: state.currentColor
})

const mapActionsToProps = dispatch => {
  return {
    getColor: (id) => dispatch(getColor(id)),
    onChange: (field, value) => dispatch(chgColor(field, value)),
    onSubmit: (color, history) => dispatch(updateColor(color, history))
  }
}
const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(EditColorForm)

```

In `app/src/action-creators/colors.js` we need to add `updateColor`

``` js

export const updateColor = (color, history) => async (dispatch, getState) => {
  const result = await fetch(url, {
    headers: {
      'Content-Type': 'application/json'
    },
    method: 'PUT',
    body: JSON.stringify(color)
  }).then(res => res.json())

  if (result.ok) {
    dispatch(setColors)
    history.push('/colors/' + color.id)
  }
}

```

## Add edit route

In `src/App.js` add the following route

``` js

import EditColorForm from './pages/colors/edit-form'

//... be sure to put this route above the show routes

<Route path="/colors/:id/edit" component={EditColorForm} />
```


## Verify

You should be able to edit your color either the name or the value. Once saved it should redirect to the show page.

## Challenge

Implement an edit for the other four domains

## Complete

Congrats! You have completed all eight stages for 5 mini crud applications.
