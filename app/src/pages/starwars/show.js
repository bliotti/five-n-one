import React from "react";
import Component from "@reactions/component";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getStarwars } from "../../action-creaters/starwars";
import starwars from ".";

const ShowStarwars = props => (
  <Component didMount={() => props.getStarwars(props.match.params.id)}>
    {() => (
      <div>
        {props.match.params.id === props.id ? (
          <div>
            <h1>{props.name}</h1>
            <Link to={`/starwars/${props.id}/edit`}>
              <button type="button">Edit</button>
            </Link>
            <button
              type="button"
              onClick={() => props.removeStarwars(props.id)}
            >
              Remove
            </button>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    )}
  </Component>
);

const mapStateToProps = state => {
  return state.currentStarwars;
};

const mapActionToProps = dispatch => ({
  getStarwars: id => dispatch(getStarwars(id)),
  removeStarwars: id => null
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowStarwars);
