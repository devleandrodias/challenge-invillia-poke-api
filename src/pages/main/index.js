import React from "react";
import { Component } from "react";

import api from "../../service/api";

import CardComponent from "../../components/card";

import "./style.css";

export default class Main extends Component {
  state = {
    name: null,
    id: null,
  };

  async componentDidMount() {
    const response = await api.get();

    const { name } = response.data;

    this.setState({ name });
  }

  render() {
    return <CardComponent name={this.state.name} />;
  }
}
