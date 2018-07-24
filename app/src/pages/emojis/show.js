import React from "react";
import { connect } from "react-redux";
import Component from "@reactions/component";
import { getEmoji } from "../../action-creaters/emojis";
import { Link } from "react-router-dom";

const ShowEmojis = props => (
  <Component didMount={() => props.getEmoji(props.match.params.id)}>
    {() => (
      <div>
        {props.match.params.id === props.id ? (
          <React.Fragment>
            <h1>{props.name}</h1>
            <Link to={`/emojis/${props.id}/edit`}>
              <button type="button">Edit</button>
            </Link>
            <button onClick={e => props.removeEmoji(props.id)}>Remove</button>
          </React.Fragment>
        ) : (
          <p>Retrieving Emoji...</p>
        )}
      </div>
    )}
  </Component>
);

const mapStateToProps = state => {
  return state.currentEmoji;
};

const mapActionToProps = dispatch => {
  return { getEmoji: id => dispatch(getEmoji(id)), removeEmoji: () => null };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowEmojis);
