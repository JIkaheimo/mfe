// @ts-check

import React, { Suspense, lazy } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createGenerateClassName,
  StylesProvider,
} from "@material-ui/core/styles";

import Header from "./components/Header";
import Progress from "./components/Progress";

const Marketing = lazy(() => import("./frontends/Marketing"));
const Auth = lazy(() => import("./frontends/Auth"));
const Dashboard = lazy(() => import("./frontends/Dashboard"));

const generateClassName = createGenerateClassName({
  productionPrefix: "co",
});

const App = () => {
  const [signedIn, setSignedIn] = React.useState(false);

  return (
    <React.StrictMode>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <div>
            <Header signedIn={signedIn} onSignOut={() => setSignedIn(false)} />
            <Suspense fallback={<Progress />}>
              <Routes>
                <Route
                  path='/auth/*'
                  element={
                    <Auth
                      onSuccessfulAuthentication={() => setSignedIn(true)}
                    />
                  }
                />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/*' element={<Marketing />} />
              </Routes>
            </Suspense>
          </div>
        </BrowserRouter>
      </StylesProvider>
    </React.StrictMode>
  );
};

export default App;
