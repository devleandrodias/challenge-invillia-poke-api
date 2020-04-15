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
        name: null,
        forms: {
          front_default: null,
          back_default: null,
        },
        abilities: [
          {
            name: null,
            short_effect: null,
          },
        ],
      },
    ],
  };

  async componentDidMount() {
    const { count, results } = await (await api.get()).data;

    results.forEach(async (element) => {
      const { data } = await api.get(element.url);
      const { abilities, forms } = data;

      forms.forEach(async (element) => {
        const { sprites } = (await api.get(element.url)).data;
        const { front_default, back_default } = sprites;
      });

      abilities.forEach(async (element) => {
        const { name, url } = element.ability;
        const { effect_entries } = (await api.get(url)).data;

        effect_entries.forEach((effect) => {
          const { short_effect } = effect;
        });
      });

      this.setState({
        count,
        results: [
          {
            name: element.name,
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
      });
    });
  }

  render() {
    const { count, results } = this.state;

    const data = [
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
      {
        name: "Poke 02",
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
      {
        name: "Poke 03",
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
    ];

    return (
      <Fragment>
        <CardComponent results={data} />
        <PaginationComponent count={count} />
      </Fragment>
    );
  }
}
