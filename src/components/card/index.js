import React from "react";
import { Component, Fragment } from "react";

export default class Card extends Component {
  render() {
    return (
      <h1>
        Hello, {this.props.name}, {this.props.id}
      </h1>
    );
  }
}
