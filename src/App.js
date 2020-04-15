import React, { Fragment } from "react";

import Routes from "./routes";
import Header from "./components/header";

import "./style/global.css";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
    </Fragment>
  );
}
