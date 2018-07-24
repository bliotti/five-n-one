import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Colors from "./pages/colors";
import ShowColor from "./pages/colors/show";
import ColorForm from "./pages/colors/form";
import StarWars from "./pages/starwars";
import BuzzWords from "./pages/buzzwords";
import ShowBuzzword from "./pages/buzzwords/show";
import BuzzwordsForm from "./pages/buzzwords/form";
import Cookies from "./pages/fortune-cookies";
import ShowCookie from "./pages/fortune-cookies/show";
import Emojis from "./pages/emojis";
import ShowEmoji from "./pages/emojis/show";
import EmojiForm from "./pages/emojis/form";
import CookieForm from "./pages/fortune-cookies/form";
import StarwarsForm from "./pages/starwars/form";

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
  );
};

const App = props => {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/colors" component={Colors} />
          <Route exact path="/colors/new" component={ColorForm} />
          <Route exact path="/colors/:id" component={ShowColor} />
          <Route exact path="/starwars" component={StarWars} />
          <Route exact path="/starwars/new" component={StarwarsForm} />
          <Route exact path="/buzzwords" component={BuzzWords} />
          <Route exact path="/buzzwords/new" component={BuzzwordsForm} />
          <Route exact path="/buzzwords/:id" component={ShowBuzzword} />
          <Route exact path="/cookies" component={Cookies} />
          <Route exact path="/cookies/:id" component={ShowCookie} />
          <Route exact path="/cookies/new" component={CookieForm} />
          <Route exact path="/emojis" component={Emojis} />
          <Route exact path="/emojis/:id" component={ShowEmoji} />
          <Route exact path="/emojis/new" component={EmojiForm} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
