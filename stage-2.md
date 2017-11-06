## Stage 2 - List Components

We need to create some list components to list our
items.

* create a pages directory in the `app/src` directory
* create a colors directory in the `pages` directory
* create a `index.js` file in the `colors` directory

src/pages/colors/index.js

``` js
import React from 'react'
import fetch from 'isomorphic-fetch'

let colors

// load colors
fetch('http://localhost:5000/colors').then(res => res.json)
  .then(colors => colors = colors)

const li = color => {
  return (
    <li key={color.id} style={{color: color.value}}>{color.name}</li>
  )
}

const Colors = props => {
  return (
    <div>
      <ul>{map(li, colors)}</li>
    </div>
  )
}

export default Colors
```

src/App.js

``` js
// at the top section of the file
import Colors from './pages/colors'

// .. inside your Switch component

<Route path="/colors" component={Colors} />


```

## Verify

Ok, make sure your api server is running and your app is running, then you should be able to go to the colors endpoint of localhost:3000/colors and it should show a list of all the css colors.

## Challenge

Now implement the list component for the following domains following the same
pattern as the tutorial above

* buzzwords
* starwars
* fortune-cookies
* emojis

## Commit Stage 2

``` bash
git add .
git commit -am "completed stage-2"
git push origin master
```

## Completed

Congrats - You have created a list component for 5 domains.

[Proceed to Stage 3](stage-3.md)
