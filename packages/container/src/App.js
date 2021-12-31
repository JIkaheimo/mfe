// @ts-check

import React from "react";

import { BrowserRouter } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Marketing from "./frontends/Marketing";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <React.StrictMode>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <Header />
        <Marketing />
      </BrowserRouter>
    </StylesProvider>
  </React.StrictMode>
);

export default App;
