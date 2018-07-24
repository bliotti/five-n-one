import React from "react";
import { map } from "ramda";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const li = sw => (
  <li key={sw.id}>
    <Link to={`/starwars/${sw.id}`}>{sw.name}</Link>
  </li>
);

const StarWars = props => (
  <div>
    {/* eslint-disable-next-line */}
    <marquee direction="right">
      {/* eslint-disable-next-line */}
      <marquee direction="up">🚀Star Wars 🚀</marquee>
    </marquee>
    <Link to="/starwars/new">Add a new starwars character</Link>
    <ul>{map(li, props.swNames)}</ul>
  </div>
);

const mapStateToProps = state => {
  return { swNames: state.starwars };
};

export default connect(mapStateToProps)(StarWars);
