import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const li = cookie => (
  <li key={cookie.id}>
    <Link to={`/cookies/${cookie.id}`}>{cookie.name}</Link>
  </li>
);

const Cookies = props => (
  <div>
    <header>Fortune Sayings for the Unfortunate</header>
    <Link to="/cookies/new">Add a new fortune cookie ?</Link>
    <ul>{map(li, props.cookies)}</ul>
  </div>
);

const mapStateToProps = state => {
  return { cookies: state.cookies };
};

export default connect(mapStateToProps)(Cookies);
