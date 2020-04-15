import React, { Component } from "react";

import logo from "../../assets/icons/logo.svg";

import "./style.css";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo}></img>
      </div>
    );
  }
}
