// @ts-check

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import PubSub from "pubsub-js";

// @ts-ignore
import { mount } from "marketing/App";
import { NAVIGATE } from "./events";

const Marketing = () => {
  const [onNavigate, setOnNavigate] = React.useState(null);

  const navigate = useNavigate();
  const location = useLocation();

  const marketing = React.useRef();

  React.useLayoutEffect(() => {
    const { onNavigate } = mount(marketing.current, {
      onNavigate: NAVIGATE,
      initialPath: location.pathname,
    });

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
    if (onNavigate) {
      PubSub.publish(NAVIGATE, location);
    }
  }, [location, onNavigate]);

  return <div ref={marketing}></div>;
};

export default Marketing;
