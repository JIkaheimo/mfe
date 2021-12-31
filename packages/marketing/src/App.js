// @ts-check

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { StylesProvider } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

/**
 * The main entry point for the marketing application.
 *
 * @returns {JSX.Element}
 */
const App = () => (
  <React.StrictMode>
    <StylesProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/' element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </StylesProvider>
  </React.StrictMode>
);

export default App;
