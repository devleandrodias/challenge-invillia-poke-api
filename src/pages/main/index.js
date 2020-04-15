import React, { Fragment } from "react";
import { Component } from "react";

import api from "../../service/api";

import CardComponent from "../../components/card";
import PaginationComponent from "../../components/pagination";

import "./style.css";

export default class Main extends Component {
  state = {
    data: [
      {
        name: "Poke 01",
        forms: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/22.png",
        },
        abilities: [
          {
            name: "sniper",
            short_effect:
              "Strengthens critical hits to inflict 3× damage rather than 2×.",
          },
          {
            name: "keen-eye",
            short_effect: "Prevents accuracy from being lowered.",
          },
        ],
      },
    ],
  };

  async componentDidMount() {
    const { count, results } = await (await api.get()).data;

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
    });

    // results.forEach(async (element) => {
    //   const { data } = await api.get(element.url);
    //   const { abilities, forms } = data;

    //   forms.forEach(async (element) => {
    //     const { sprites } = (await api.get(element.url)).data;
    //     const { front_default, back_default } = sprites;
    //   });

    //   abilities.forEach(async (element) => {
    //     const { name, url } = element.ability;
    //     const { effect_entries } = (await api.get(url)).data;

    //     effect_entries.forEach((effect) => {
    //       const { short_effect } = effect;
    //     });
    //   });
    // }
  }

  render() {
    const { count, results } = this.state;
    console.log(results);
    const data = [
      {
        name: "charmander",
        forms: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/24.png",
        },
        abilities: [
          {
            name: "chlorophyll",
            short_effect: "Doubles Speed during strong sunlight.",
          },
          {
            name: "overgrow",
            short_effect:
              "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
          },
        ],
      },
      {
        name: "charizard",
        forms: {
          front_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
          back_default:
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png",
        },
        abilities: [
          {
            name: "chlorophyll",
            short_effect: "Doubles Speed during strong sunlight.",
          },
          {
            name: "overgrow",
            short_effect:
              "Strengthens grass moves to inflict 1.5× damage at 1/3 max HP or less.",
          },
          {
            name: "chlorophyll",
            short_effect: "Doubles Speed during strong sunlight.",
          },
        ],
      },
    ];

    return (
      <Fragment>
        <div className="main">
          <CardComponent results={data} />
          <CardComponent results={data} />
          <CardComponent results={data} />
          <CardComponent results={data} />
          <CardComponent results={data} />
          <PaginationComponent count={count} />
        </div>
      </Fragment>
    );
  }
}
