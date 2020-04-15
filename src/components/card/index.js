import React, { Fragment } from "react";
import { Component } from "react";

import "./style.css";

import api from "../../service/api";

export default class Card extends Component {
  render() {
    const { results, count } = this.props;

    return (
      <Fragment>
        <div className="card">
          <p>Nome Pokemon: Bubasauro</p>
        </div>
      </Fragment>
    );
  }
}
