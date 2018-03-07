# Stage 4

List Reducers/Store/Connect

This stage will have a lot of moving parts, so it may take a long time to implement. Now that we have the api, the action creator and the list component, we need to connect them up to redux, but before we connect
everything up, we need to create a redux store, setup the app provider,
and use the connect to map the redux state to our components props.

> Make sure you have the api running on port 5000 and the app running on port 3000

## Reducers

In the **app/src** directory, create a new directory called **reducers**.

In the **reducers** directory, create a new file called **colors.js**.

In the **colors.js** file, lets add the following reducer for our list of colors.

**src/reducers/colors.js**

``` js
import { SET_COLORS } from '../constants'

export const colors = (state=[], action) => {
  switch (action.type) {
    case SET_COLORS:
      return action.payload
    default:
      return state
  }
}
```

## Store

We need to create a redux store to manage our state

In the **src** directory create a file called **store.js**.

**src/store.js**

``` js
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { colors } from '../reducers/colors'

export default createStore(
  combineReducers({
    colors
  }),
  applyMiddleware(thunk)
)

```

## Provider

Now that we created our redux store we need to attach the redux store
to our app as a provider to let our app know when to render the app.

In the **src** directory open the **index.js** file

``` js
import { Provider } from 'react-redux'
import store from './store'

import { setColors } from './action-creators/colors'

// .... in the render function

render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
)

// we can also initialize our lists here:
store.dispatch(setColors)

```

## Connect

To connect to our redux store, we need to use the connect higher order component to wrap around the component we want to connect to the store.

In **src/pages/colors** open the **index.js** file

Add the following code:

``` js
import { connect } from 'react-redux'

// remove the hardcoded fetch statement

// let colors
// fetch('http://localhost:5000/colors').then(res => res.json)
//   .then(colors => colors = colors)


// .. below your component

const mapStateToProps = (state) => {
  return {colors: state.colors}
}

const connector = connect(mapStateToProps)

// replace export statement
export default connector(Colors)
```

## Verify

You should be able to visually verify that the colors show on your page
after having removed the hard coded fetch and it should now be flowing
through your redux store.

## Challenge

> DON'T COPY AND PASTE CODE!

Now complete the same flow for the following domains. :

* buzzwords
* starwars
* fortune-cookies
* emojis

## Completed

Congrats!!!!

[Proceed to Stage 5](stage-5.md)
