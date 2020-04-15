import React from "react";
import { Component } from "react";

import "./style.css";

export default class Pagination extends Component {
  render() {
    const { count } = this.props;

    return (
      <div className="pagination">
        <p>1 2 3 4 5 ... 22</p>
        <p>Results 1 - 10 of {count}</p>
      </div>
    );
  }
}
