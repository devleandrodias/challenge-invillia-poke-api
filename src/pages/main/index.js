import React from "react";
import { Component } from "react";

import api from "../../service/api";

import CardComponent from "../../components/card";

import "./style.css";

import prevIcon from "../../assets/icons/prev.svg";
import nextIcon from "../../assets/icons/next.svg";

export default class Main extends Component {
  state = {
    results: [],
    page: null,
    next: null,
    previous: null,
  };

  async componentDidMount() {
    this.loadPokemons();
  }

  loadPokemons = async (
    page = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=10"
  ) => {
    const { results, next, previous } = await (await api.get(page)).data;

    const payload = [];

    results.map((item) => {
      const { name, url } = item;

      const test = {};

      results.map(async () => {
        const { data } = await api.get(url);
        const { abilities, forms } = data;

        forms.map(async (form) => {
          const { sprites } = (await api.get(form.url)).data;
          const { front_default } = sprites;
          console.log(front_default);
          // abilities.map(async (abily) => {
          //   const { name, url } = abily.ability;
          //   const { effect_entries } = (await api.get(url)).data;

          //   effect_entries.map((effect) => {
          //     const { short_effect } = effect;

          //     // result.abilities.push({
          //     //   name,
          //     //   short_effect,
          //     // });
          //   });
          // });
        });
      });

      payload.push({
        name,
        forms: null,
        abilities: [
          {
            name: "habilidae",
            short_effect: "desce habili",
          },
          {
            name: "habilidae2",
            short_effect: "desce habili2",
          },
        ],
      });
    });

    this.setState({
      results: payload,
      next,
      previous,
    });
  };

  prevPage = (prev) => {
    this.loadPokemons(prev);
  };

  nextPage = (next) => {
    this.loadPokemons(next);
  };

  render() {
    const { results, next, previous } = this.state;
    console.log("previous", previous);
    return (
      <div className="main">
        <CardComponent results={results} />
        <div className="pagination">
          <button
            onClick={() => this.prevPage(previous)}
            disabled={previous === null ? true : false}
          >
            <img src={prevIcon} alt="prevPage" className="icon-arrow" />
          </button>
          <button onClick={() => this.nextPage(next)}>
            <img src={nextIcon} alt="nextPage" className="icon-arrow" />
          </button>
        </div>
      </div>
    );
  }
}
