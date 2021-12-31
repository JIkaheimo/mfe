// @ts-check

import React from "react";

import { BrowserRouter } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

import Header from "./components/Header";

// @ts-ignore
import { mount } from "marketing/App";

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const marketing = React.useRef(null);

  React.useEffect(() => {
    // Mount all the microfrontends
    mount(marketing.current);
  });

  return (
    <React.StrictMode>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Header />
          <div ref={marketing} id='marketing'></div>
        </BrowserRouter>
      </StylesProvider>
    </React.StrictMode>
  );
};

export default App;
