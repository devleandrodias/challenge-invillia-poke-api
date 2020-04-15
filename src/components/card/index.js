import React, { Fragment } from "react";
import { Component } from "react";

import "./style.css";

export default class Card extends Component {
  render() {
    const { results } = this.props;

    return (
      <Fragment>
        <div className="card-row">
          {results.map((x) => (
            <div key={x.name} className="card">
              <div className="card-body">
                <div className="card-title">
                  <span>{x.name}</span>
                </div>
                <div className="image-pokemon">
                  <img src={x.forms.front_default} />
                </div>

                <div className="card-description-main">
                  {x.abilities.map((ability) => (
                    <div className="card-description-items">
                      <div className="text-subtitle">
                        Ability:
                        <span className="text-description">
                          {" "}
                          {ability.name}
                        </span>
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
      </Fragment>
    );
  }
}
