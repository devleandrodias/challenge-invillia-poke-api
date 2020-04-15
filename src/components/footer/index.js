import React from "react";
import { Component } from "react";

import hearth from "../../assets/icons/hearth.svg";

import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Developed with</p>
        <img src={hearth} alt="hearth" />
        <p>love by Leandro Dias</p>
      </div>
    );
  }
}
