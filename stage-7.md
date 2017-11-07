# Stage 7

Remove Feature

In this stage we want to add the ability to remove an item from the list.

We will implement this feature in the show page. We have already stubbed
out a placeholder.

In the `app/src/pages/colors/show.js` file make the following adjustments

``` js
import { getColor, removeColor } from '../../action-creators/colors'

// ...

<button onClick={e => props.removeColor(props.id, props.history)}>Remove</button>

// ....

const mapActionsToProps = (dispatch) => {
  return {
    getColor: id => dispatch(getColor(id)),
    removeColor: (id, history) => {
      if (confirm('Are you sure?')) {
        dispatch(removeColor(id, history))        
      }

    }

  }
}

```

In the `app/src/action-creators/colors.js` file add the following `action-creator`

``` js

export default removeColor = (id, history) => async (dispatch, getState) => {
  const results = await fetch(url + '/' + id, {
    method: 'DELETE'
  }).then(res => res.json())

  if (results.ok) {
    dispatch(setColors)
    history.push('/colors')
  } else {
    // handle error
  }
}
```

On the server we need to implement a new endpoint

In `api/routes/colors.js`

``` js
const { reject, compose, equals, prop } = require('ramda')

app.delete('/colors/:id', (req, res) => {
  colors = reject(compose(
    equals(req.params.id),
    prop('id')
  ), colors)
  res.send({ok: true})
})
```

## Verify

You can verify this code works by clicking on a color then clicking the delete button, and ok to the confirm prompt, it should remove the color and redirect you to the list of colors.

## Challenge

Now implement the remove button for the following domains:

* buzzwords
* starwars
* fortune-cookies
* emojis

## Complete

Congrats! Are you ready to move forward!

[Proceed to stage 8](stage-8.md)
