// @ts-check

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PubSub from "pubsub-js";

// @ts-ignore
import { mount } from "auth/App";
import { NAVIGATE } from "./events";

const Auth = ({ onSuccessfulAuthentication }) => {
  const [onNavigate, setOnNavigate] = React.useState(null);
  const [onAuthenticate, setOnAuthenticate] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const auth = React.useRef();

  React.useLayoutEffect(() => {
    const { onNavigate, onAuthenticate } = mount(auth.current, {
      onNavigate: NAVIGATE,
      initialPath: location.pathname,
    });

    setOnAuthenticate(onAuthenticate);
    setOnNavigate(onNavigate);
  }, []);

  React.useEffect(() => {
    const navigation = PubSub.subscribe(onNavigate, (_, { pathname }) => {
      if (pathname == location.pathname) return;
      navigate(pathname);
    });

    return () => PubSub.unsubscribe(navigation);
  }, [location, onNavigate]);

  React.useEffect(() => {
    const authentication = PubSub.subscribe(onAuthenticate, (_, payload) => {
      onSuccessfulAuthentication();
    });

    return () => PubSub.unsubscribe(authentication);
  }, [onAuthenticate]);

  React.useEffect(() => {
    if (onNavigate) {
      PubSub.publish(NAVIGATE, location);
    }
  }, [location, onNavigate]);

  return <div ref={auth}></div>;
};

export default Auth;
