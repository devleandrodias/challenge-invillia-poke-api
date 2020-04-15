import React from "react";
import { Component } from "react";

export default class Pagination extends Component {
  render() {
    const { count } = this.props;

    return <h1>[1] [2] [3] [4] total de {count} de pokemons</h1>;
  }
}
