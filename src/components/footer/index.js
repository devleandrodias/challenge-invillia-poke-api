import React from "react";
import { Component } from "react";

import pokemon from "../../assets/icons/pokemon.svg";
import hearth from "../../assets/icons/hearth.svg";

import "./style.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>Developed with</p>
        <img src={hearth} />
        <p>love by</p>
        <img src={pokemon} />
        <p>Leandro Dias</p>
      </div>
    );
  }
}
