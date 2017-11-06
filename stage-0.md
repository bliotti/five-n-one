# Stage 0 - Setup

## Summary

In this stage, we will be setting up the api and app projects and creating a simple menu page that will route to all of our applications.

## Details

``` bash
npm install create-react-app yarn -g
create-react-app app
mkdir api
cd api
yarn init -y
# add server modules
yarn add express body-parser cors
# add utility modules
yarn add ramda uuid
# add domain modules 
yarn add css-color-names buzzwords starwars-names fortune-cookie emojis-list
yarn add nodemon --dev
npm install json -g
json -I -f package.json -e 'this.scripts = {"start": "nodemon server"}'
touch server.js
```

api/server.js

``` js
const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors({ credentials: true }))

// load routes here

app.get('/', (req, res) => res.send('5n1 API Server'))

app.listen(5000)
console.log('Server listening at 5000')
```

``` bash
cd ..
cd app
yarn add react-router-dom redux redux-thunk react-redux tachyons ramda
```

src/App.js

``` js
import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'

const Menu = props = {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">BuzzWords</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/fortune-cookies">Fortune Cookies</Link>
        </li>
        <li>
          <Link to="/emojis">Emojis</Link>
        </li>
      </ul>
    </div>
  )
}

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
```

src/index.js

``` js
import React from 'react'
import { render } from 'react-dom'
import 'tachyons'

import App from './App'

render(<App />, document.getElementById('root'))
```

## Verify

Now that you have setup both the api server and the app server, we need to verify that everything is working as expected.

Open two terminals, one should be in the five-in-one/api directory and one should be in the five-in-on/app directory.

### API

In the api terminal, start the API.

    yarn start

Open a browser at http://localhost:5000

You should see: `5n1 API Server`

### App

In the app terminal, start the app.

    yarn start

It should open a browser tab at http://localhost:3000 and you should see a list of links with the header Five In One

---

Congrats! You have completed Stage-0

[Proceed to Stage 1](stage-1.md)
