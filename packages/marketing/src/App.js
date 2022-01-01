// @ts-check

import React from "react";
import {
  MemoryRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import PubSub from "pubsub-js";

import { StylesProvider, createGenerateClassName } from "@material-ui/core";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const Routing = ({ onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [initial, setInitial] = React.useState(true);

  // Handle navigation from the container.
  React.useEffect(() => {
    const navigation = PubSub.subscribe(onNavigate, (_, { pathname }) => {
      if (pathname == location.pathname) return;
      navigate(pathname);
    });

    return () => PubSub.unsubscribe(navigation);
  }, [location, onNavigate]);

  // Forward navigation to the container.
  React.useEffect(() => {
    if (!initial) {
      PubSub.publish("marketing.navigate", location);
    }
    setInitial(false);
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
const App = ({ onNavigate, initialPath }) => {
  return (
    <React.StrictMode>
      <StylesProvider generateClassName={generateClassName}>
        <MemoryRouter initialEntries={[initialPath]}>
          <Routing onNavigate={onNavigate} />
        </MemoryRouter>
      </StylesProvider>
    </React.StrictMode>
  );
};

export default App;
