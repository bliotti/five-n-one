import React from "react";
import { Link } from "react-router-dom";
import { getColor } from "../../action-creaters/colors";
import { connect } from "react-redux";
import Component from "@reactions/component";

const ShowColor = props => (
  <Component didMount={() => getColor(props.match.params.id)}>
    {() =>
      props.id === props.match.params.id ? (
        <div style={{ backgroundColor: props.value }}>
          <h1>{props.name}</h1>
          <Link to={`/colors/${props.id}/edit`}>Edit</Link>
          <button onClick={e => props.removeColor(props.id, props.history)}>
            Remove
          </button>
        </div>
      ) : (
        <h1>Loading Color...</h1>
      )
    }
  </Component>
);

const mapStateToProps = state => {
  return {
    id: state.currentColor.id,
    name: state.currentColor.name,
    value: state.currentColor.value
  };
};

const mapActionToProps = dispatch => {
  return {
    getColor: id => dispatch(getColor(id)),
    removeColor: () => null
  };
};

export default connect(
  mapStateToProps,
  mapActionToProps
)(ShowColor);
