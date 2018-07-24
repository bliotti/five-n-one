import React from "react";
import { connect } from "react-redux";
import { getCookie } from "../../action-creaters/fortune-cookies";
import Component from "@reactions/component";
import { Link } from "react-router-dom";

const ShowCookie = props => (
  <Component didMount={() => props.getCookie(props.match.params.id)}>
    {() => (
      <div>
        {props.match.params.id === props.id ? (
          <React.Fragment>
            <h1>{props.name}</h1>
            <Link to={`/cookies/${props.id}`}>
              {" "}
              <button type="button">Edit</button>
            </Link>
            <button type="button" onClick={e => props.removeCookie}>
              Remove
            </button>
          </React.Fragment>
        ) : (
          <p>Retrieving Cookie...</p>
        )}
      </div>
    )}
  </Component>
);

const mapStateToProps = state => {
  return state.currentCookie;
};

const mapActionToProps = dispatch => ({
  getCookie: id => dispatch(getCookie(id)),
  removeCookie: id => null
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowCookie);
