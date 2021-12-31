// @ts-check

import React from "react";
import {
  MemoryRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const Routing = ({ onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Handle navigation from the container.
  React.useEffect(() => {
    const handleNavigate = (event) => {
      const { pathname } = event.detail;
      if (pathname != location.pathname) {
        navigate(pathname);
      }
    };

    window.addEventListener("navigate", handleNavigate);
    return () => window.removeEventListener("navigate", handleNavigate);
  }, [location]);

  // Forward navigation to the container.
  React.useEffect(() => {
    if (onNavigate) {
      onNavigate(location);
    }
  }, [location]);

  return (
    <Routes>
      <Route path='/pricing' element={<Pricing />} />
      <Route path='/' element={<Landing />} />
    </Routes>
  );
};

/**
 * The main entry point for the marketing application.
 *
 * @returns {JSX.Element}
 */
const App = ({ onNavigate }) => {
  return (
    <React.StrictMode>
      <StylesProvider generateClassName={generateClassName}>
        <MemoryRouter>
          <Routing onNavigate={onNavigate} />
        </MemoryRouter>
      </StylesProvider>
    </React.StrictMode>
  );
};

export default App;
