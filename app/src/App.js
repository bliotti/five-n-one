import React from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
import Colors from './pages/colors'
import StarWars from './pages/starwars'
import BuzzWords from './pages/buzzwords'
import Cookies from './pages/fortune-cookies'
import Emojis from './pages/emojis'

const Menu = props => {
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
          <Link to="/cookies">Fortune Cookies</Link>
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
          <Route exact path="/colors" component={Colors} />
          <Route exact path="/starwars" component={StarWars} />
          <Route exact path="/buzzwords" component={BuzzWords} />
          <Route exact path="/cookies" component={Cookies} />
          <Route exact path="/emojis" component={Emojis} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
