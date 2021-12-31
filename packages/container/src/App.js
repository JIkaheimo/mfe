// @ts-check

import React from "react";

import { BrowserRouter } from "react-router-dom";

import Header from "./components/Header";

// @ts-ignore
import { mount } from "marketing/App";

const App = () => {
  const marketing = React.useRef(null);

  React.useEffect(() => {
    // Mount all the microfrontends
    mount(marketing.current);
  });

  return (
    <React.StrictMode>
      <BrowserRouter>
        <Header />
        <div ref={marketing} id='marketing'></div>
      </BrowserRouter>
    </React.StrictMode>
  );
};

export default App;
