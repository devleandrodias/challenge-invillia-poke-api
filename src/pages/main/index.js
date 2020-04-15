import React from "react";
import { Component } from "react";

import api from "../../service/api";

import CardComponent from "../../components/card";

import "./style.css";

import prevIcon from "../../assets/icons/prev.svg";
import nextIcon from "../../assets/icons/next.svg";

const baseURL = "https://pokeapi.co/api/v2/pokemon";

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

  loadPokemons = async (page = `${baseURL}?offset=0&limit=10`) => {
    const { results, next, previous } = await (await api.get(page)).data;

    let arrayAux = [];

    for (let index = 0; index < results.length; index++) {
      const { name, url } = results[index];

      const response = await api.get(url);

      const { abilities, forms } = response.data;

      const urlForm = forms.map((form) => {
        const { url: urlForm } = form;
        return urlForm;
      });

      const arryAuxHabi = [];

      abilities.map(async (ab) => {
        const { ability } = ab;
        const { name, url } = ability;

        const response = await api.get(url);

        const { effect_entries } = response.data;

        effect_entries.map((eff) => {
          const { effect } = eff;

          arryAuxHabi.push({
            name,
            short_effect: effect,
          });

          return null;
        });
      });

      const responseForm = await api.get(urlForm[0]);
      const { sprites } = responseForm.data;
      const { front_default } = sprites;

      arrayAux.push({
        name,
        forms: front_default,
        abilities: arryAuxHabi,
      });
    }

    //Seta no estado
    this.setState({
      results: arrayAux,
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
