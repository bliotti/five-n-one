import React from "react";
import { connect } from "react-redux";
import { getBuzzword } from "../../action-creaters/buzzwords";
import Component from "@reactions/component";
import { Link } from "react-router-dom";

const ShowBuzzword = ({ match, id, name, getBuzzword, removeBuzzword }) => (
  <Component didMount={() => getBuzzword(match.params.id)}>
    {() => (
      <div>
        {match.params.id === id ? (
          <React.Fragment>
            <h1>{name}</h1>
            <Link to={"./edit"}>
              <button type="button">Edit</button>
            </Link>
            <button onClink={e => removeBuzzword(id)}>Remove</button>
          </React.Fragment>
        ) : (
          <p>Retrieving Buzzword....</p>
        )}
      </div>
    )}
  </Component>
);
const mapStateToProps = state => {
  return { id: state.currentBuzzword.id, name: state.currentBuzzword.name };
};

const mapActionToProps = dispatch => ({
  getBuzzword: id => dispatch(getBuzzword(id)),
  removeBuzzword: id => null
});

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowBuzzword);
