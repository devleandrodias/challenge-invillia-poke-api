import React from "react";
import { Component } from "react";

import "./style.css";

export default class Card extends Component {
  render() {
    const { results } = this.props;
    // console.log(results);
    return (
      <div className="card-row">
        {results.map((res) => (
          <div key={res.name} className="card">
            <div className="card-body">
              <div className="card-title">
                <span>{res.name}</span>
              </div>
              <div className="image-pokemon">
                {/* <img src={res.forms.front_default} /> */}
                <p>{res.forms.front_default}</p>
              </div>

              <div className="card-description-main">
                {res.abilities.map((ability) => (
                  <div className="card-description-items">
                    <div className="text-subtitle">
                      Ability:
                      <span className="text-description"> {ability.name}</span>
                    </div>
                    <div className="text-subtitle">
                      Effect:
                      <span className="text-description">
                        {" "}
                        {ability.short_effect}{" "}
                      </span>
                    </div>
                    <div className="text-divisor" />
                  </div>
                ))}
              </div>
            </div>
            <div className="card-footer">
              <span>Mais Detalhes</span>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
