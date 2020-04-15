import React, { Fragment } from "react";
import { Component } from "react";

import api from "../../service/api";

import CardComponent from "../../components/card";
import PaginationComponent from "../../components/pagination";

import "./style.css";

export default class Main extends Component {
  state = {
    count: null,
    results: [
      {
        forms: [],
        abilities: [],
      },
    ],
  };

  async getDetailsPokemons() {}

  async componentDidMount() {
    const response = await api.get();

    const { count, results } = response.data;

    this.setState({ count, results });
  }

  render() {
    const { count, results } = this.state;

    return (
      <Fragment>
        <CardComponent count={count} results={results} />
        {/* <PaginationComponent /> */}
      </Fragment>
    );
  }
}
