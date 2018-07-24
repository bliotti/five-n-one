import React from "react";
import { connect } from "react-redux";
import { getCookie } from "../../action-creaters/fortune-cookies";
import Component from "@reactions/component";
import { Link } from "react-router-dom";

const ShowCookie = props => (
  <Component didMount={() => props.getCookie(props.match.params.id)} />
);
