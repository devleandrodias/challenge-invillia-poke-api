import React, { Fragment } from "react";

import Routes from "./routes";
import Header from "./components/header";
import Footer from "./components/footer";

import "./style/global.css";

export default function App() {
  return (
    <Fragment>
      <Header />
      <Routes />
      <Footer />
    </Fragment>
  );
}
