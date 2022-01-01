// @ts-check

import React from "react";
import {
  MemoryRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
  BrowserRouter,
} from "react-router-dom";

import PubSub from "pubsub-js";

import { StylesProvider, createGenerateClassName } from "@material-ui/core";
import SignUp from "./components/Signup";
import SignIn from "./components/Signin";

const generateClassName = createGenerateClassName({
  productionPrefix: "au",
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
      PubSub.publish("auth.navigate", location);
    }
    setInitial(false);
  }, [location]);

  return (
    <Routes>
      <Route path='/auth/signup' element={<SignUp onSignin={null} />} />
      <Route path='/auth/signin' element={<SignIn onSignin={null} />} />
    </Routes>
  );
};

/**
 * The main entry point for the marketing application.
 *
 * @returns {JSX.Element}
 */
const App = ({ onNavigate, initialPath }) => {
  let Router = null;

  // @ts-ignore
  if (process.env.NODE_ENV !== "development") {
    Router = MemoryRouter;
  } else {
    Router = BrowserRouter;
  }
  return (
    <React.StrictMode>
      <StylesProvider generateClassName={generateClassName}>
        <Router initialEntries={[initialPath]}>
          <Routing onNavigate={onNavigate} />
        </Router>
      </StylesProvider>
    </React.StrictMode>
  );
};

export default App;
