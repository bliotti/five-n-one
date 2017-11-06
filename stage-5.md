# Stage 5

Form Components

Welcome to stage 5, this means that you have created an api server and are listing 5 domains through redux to display in your react application.

Great Job!

In this stage, we will create a form component and then a form component
wrapper for each domain in your list.

## Form Component

This is a presentational component and we are going to create it in a way to
be reused for all of our domains, if we put our domain documents in the following nodes:

  * id
  * name
  * value

So our form will make this assumption, if it does vary then we will adjust.

In the `src` directory create a new directory called `components`

In the `src/components` directory create a new file called `form.js`

src/components/form.js

``` js
import React from 'react'
import { Link } from 'react-router-dom'

const Form = ({id, name, value, onChange, onSubmit, cancelUrl}) => {
  return (
    <form onSubmit={onSubmit({id, name, value})}>
      <div>
        <label className="dib">id</label>
        <div>{id}</div>
      </div>
      <div>
        <label className="dib">name</label>
        <input type="text" value={name} onChange={e => onChange('name', e.target.value)} />
      </div>
      <div>
        <label className="dib">value</label>
        <input type="text" value={value}
        onChange={e => onChange('value', e.target.value)} />
      </div>
      <div>
        <button>Submit</button>
        <Link to={cancelUrl}>Cancel</Link>
      </div>
    </form>
  )
}

export default Form
```

## Colors - Add New Color

We need to create a new page component that will connect allow the user to create a new color, for our list.

In the `src/pages/colors` directory create a new file called `form.js`

In `form.js` add the following code

src/pages/colors/form.js

``` js
import React from 'react'
import Form from '../../components/form'
import { connect } from 'react-redux'
import { addColor, chgColor } from '../../action-creators/colors'

const ColorForm = props => {
  return (
    <div>
      <h1>Add New Color</h1>
      <Form
        cancelUrl="/colors"
        onChange={props.onChange}
        onSubmit={props.onSubmit(props.history)}
        {...props.currentColor}
      />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    currentColor: state.currentColor
  }
}

const mapActionsToProps = (dispatch) => {
  return {
    onChange: (field, value) => {
      dispatch(chgColor(field, value))
    },
    onSubmit: history => color => {
      e.preventDefault()
      dispatch(addColor(color, history))
    }
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)
export default connector(ColorForm)
```

In the `src/pages/colors/index.js` file, we need to add a link to add a new color:

``` js
import { Link } from 'react-router-dom'

// .... component function
<Link to="/colors/new">Add New Color</Link>

```

In the `src/App.js` file we need to add a new route:

``` js
import { ColorForm } from './pages/colors/form'
//....

<Route path="/colors/new" component={ColorForm} />
```

In the `src` folder we need to add a new constant in the `constants.js` file

``` js
export const CHG_CURRENT_COLOR = 'CHG_CURRENT_COLOR'
```

In the `src/action-creators/colors.js` file

Add the following action-creators

``` js
import { CHG_CURRENT_COLOR } from '../constants'

export const addColor = (color, history) => async (dispatch, getState) => {
  const headers = { 'Content-Type': 'application/json'}
  const method = 'POST'
  const body = JSON.stringify(color)

  const result = fetch(url, {
    headers,
    method,
    body
  }).then(res => res.json())
  if (result.ok) {
    dispatch(setColors)
    history.push('/colors')
  } else {
    // handle error
  }
}

export const chgColor = (field, value) => (dispatch, getState) => {
  dispatch({type: CHG_CURRENT_COLOR, payload: {[field]: value}})
}
```

## Reducers

Now we need to manage the controlled components the changes.

In the `src/reducers/colors.js` file we want to add a new reducer.

``` js
import { CHG_CURRENT_COLOR } from '../constants'

export const currentColor = (state='', action) => {
  switch (action.type) {
    case CHG_CURRENT_COLOR:
      return merge(state, action.payload)
    default:
      return state
  }
}
```

In the `src/store.js` file we need to include the new reducer currentColor.

``` js
import { colors, currentColor } from '../reducers/colors'

export default createStore(
  combineReducers({
    colors,
    currentColor,
    //...
  }),
  applyMiddleware(thunk)
)

```

At this point, you should be able to navigate to the new color form and type a new name and value.

The remaining step is to handle the api request to add the new color to the list.

In your `api/routes/colors.js` file we need to create a new endpoint to handle the POST method.

``` js
const bodyParser = require('body-parser')
const { append } = require('ramda')
// make sure you are using
// let colors = []
//
//....

app.post('/colors', bodyParser.json(), (req, res) => {
  if (isNil(req.body)) {
    res.status(500).send({ ok: false, message: 'Must have a json document {id, name, value} to post a document'})
    return
  }
  req.body.id = uuid.v4()
  append(req.body, colors)
  res.send({ok: true})
})
```



## Summary

Ok, there was a lot of moving steps here, but if you did everything correctly, you should now be able to add new colors to your in memory data store. And see them on the color list screen.

## Challenge

Follow the same steps for all of the other domains:

* buzzwords
* starwars
* fortune-cookies
* emojis

> Tip: Try to reuse the components/form for all
domains.

## Complete!

If you completed this stage - you are own your way to being a react super star!

To break it down, we created a component form that is leveraged by all of our domain form containers.

[Proceed to Stage 6](stage-6.md)
