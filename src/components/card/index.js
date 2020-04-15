import React, { Fragment } from "react";
import { Component } from "react";

import "./style.css";

export default class Card extends Component {
  render() {
    const { results } = this.props;

    return (
      <Fragment>
        {results.map((x) => (
          <div className="card">{x.name}</div>
        ))}
      </Fragment>
    );
  }
}
