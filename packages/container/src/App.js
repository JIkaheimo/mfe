// @ts-check

import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

import Header from "./components/Header";

const Marketing = lazy(() => import("./frontends/Marketing"));
const Auth = lazy(() => import("./frontends/Auth"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => (
  <React.StrictMode>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <div>
          <Header />
          <Suspense fallback={<p>Loading ...</p>}>
            <Routes>
              <Route path='/auth/*' element={<Auth />} />
              <Route path='/*' element={<Marketing />} />
            </Routes>
          </Suspense>
        </div>
      </BrowserRouter>
    </StylesProvider>
  </React.StrictMode>
);

export default App;
