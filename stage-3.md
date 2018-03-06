# Stage 3

In stage three we want to create action-creators for each domain, instead
of creating one file of action-creators we will create a folder and
break them out by domain.

In the **src** directory create a new folder called **action-creators**
In the **src/action-creators** folder create a new file called **colors.js**.

**colors.js**

``` js
import fetch from 'isomorphic-fetch'
import { SET_COLORS } from '../constants'
const url = 'http://localhost:5000/colors'

export const setColors = async (dispatch, getState) => {
  const colors = await fetch(url).then(res => res.json())
  dispatch({type: SET_COLORS, payload: color})
}
```

In **src** directory create a new file called **constants.js**.

**constants.js**

``` js
export const SET_COLORS = 'SET_COLORS'
```

## Verify

In order verify our action creator is working, we will write a test.

In **src/action-creators** create a new file called **colors.test.js**

**src/action-creators/colors.test.js**

``` js
import { setColors } from './colors'
import { SET_COLORS } from '../constants'

test('get and dispatch colors from the api server', () => {
  function mockDispatch (action) {
    expect(action.type).toBe(SET_COLORS)
    expect(action.payload.length).toBeGreaterThan(0)
  }  

  setColors(mockDispatch)

})
```

We can run tests using the following command:

``` bash
CI=true yarn test
```

## Challenge


** DO NOT COPY AND PASTE CODE !!**

Create SET Action Creators for:

* buzzwords
* starwars
* fortune-cookies
* emojis

Also create tests for each one following the same pattern, this will help you have confidence it is working correctly.

> Remember to make sure your api and app servers are running...

## Completed

Congrats! You're doing great!

[Proceed to Stage 4](stage-4.md)
