import React, { Fragment } from "react";
import { Component } from "react";

import "./style.css";

export default class Card extends Component {
  render() {
    const { results } = this.props;

    return (
      <Fragment>
        <div className="card-row">
          {results.map((x) => (
            <div key={x.name} className="card">
              {x.name}
            </div>
          ))}
        </div>
      </Fragment>
    );
  }
}
