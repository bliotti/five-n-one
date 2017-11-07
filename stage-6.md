# Stage 6

Show Routing and Components

In this stage, we want to create a show page for each domain and then
bind links to the show page in each list page. We will need to create
a dynamic route to handle this process.

## Add the links in the list component

In the `src/pages/colors/index.js` file, we want to modify the
`li` function to create a link for each list item.

``` js
import { Link } from 'react-router-dom'


const li = color => {
  return (
    <li key={color.id} style={{color: color.value}}>
      <Link to={`/colors/${color.id}`}>
        {color.name}
      </Link>
    </li>
  )
}

```

## Add a new route in our router file

In the `App.js` file in the `src` directory we need to include a new route

``` js
import { ShowColor } from './pages/colors/show'

//... in the component Switch Component

<Route path="/colors/:id" component={ShowColor} />
```

### Create the ShowColor component

In the `src/pages/colors` directory create a new file called `show.js`

In the `show.js` file add the following component code:

``` js
import React from 'react'
import { connect } from 'react-redux'

import { getColor } from '../../action-creators/colors'

class ShowColor extends React.Component {

  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getColor(id)  
  }

  render() {
    const props = this.props

    if (props.id !== props.match.params.id) {
      return (
        <h1>Loading Color...</h1>
      )
    }

    return (
      <div className="vh-100" style={{backgroundColor: props.value}}>
        <h1>{props.name}</h1>
        <Link to={`/colors/${props.id}/edit`}>Edit</Link>
        <button onClick={e => props.removeColor(props.id, props.history)}>Remove</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return state.currentColor
}

const mapActionsToProps = (dispatch) => {
  return {
    getColor: id => dispatch(getColor(id)),
    removeColor: () => null
  }
}

const connector = connect(mapStateToProps, mapActionsToProps)

export default connector(ShowColor)

```

> You may notice we created our component differently this time. We needed to tap into a lifecycle method, the current standard for doing this is to use a class component style, this enables us to go to the api to get the most recent document and send it to redux to set as the currentColor.

## Create an ActionCreator for our getColor

In the `src/action-creators/colors` file we need to create a new action creator called `getColor`

``` js
export const getColor = id => async (dispatch, getState) => {
  const color = await fetch(url + '/' + id).then(res => res.json())
  dispatch({type: CHG_CURRENT_COLOR, payload: color})
}
```

## Implement a GET /colors/:id route on our api server

In the `api/routes/colors.js` file we need to add a new route

``` js
app.get('/colors/:id', (req, res) => {
  res.send(colors[req.params.id])
})
```

## Verify

Now you should be able to verify that you can click on any color in the list and go to the show page, then see the page color with an edit link and remove button.

## Challenge

The challenge is to do the same for all four domains

* starwars
* fortune-cookies
* buzzwords
* emojis

## Complete

Congrats!!! Now proceed to stage 7

[proceed to stage 7](stage-7.md)
