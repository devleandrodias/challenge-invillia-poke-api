import React from "react";
import { Component } from "react";

import api from "../../service/api";

import CardComponent from "../../components/card";
import PaginationComponent from "../../components/pagination";

import "./style.css";

export default class Main extends Component {
  state = {
    results: [],
  };

  async componentDidMount() {
    const { count, results } = await (await api.get()).data;

    const payload = [];

    results.map((item) => {
      const result = {
        name: null,
        forms: {},
        abilities: [],
      };

      const { name, url } = item;

      result.name = name;

      results.map(async () => {
        const { data } = await api.get(url);
        const { abilities, forms } = data;

        forms.map(async (form) => {
          const { sprites } = (await api.get(form.url)).data;
          const { front_default, back_default } = sprites;

          result.forms.front_default = front_default;
          result.forms.back_default = back_default;

          abilities.map(async (abily) => {
            const { name, url } = abily.ability;
            const { effect_entries } = (await api.get(url)).data;

            effect_entries.map((effect) => {
              const { short_effect } = effect;

              result.abilities.push({
                name,
                short_effect,
              });
            });
          });
        });
      });
      payload.push(result);
    });

    this.setState({
      count,
      results: payload,
    });
  }

  render() {
    const { count, results } = this.state;
    return (
      <div className="main">
        <CardComponent results={results} />
        <PaginationComponent count={count} />
      </div>
    );
  }
}
