// @ts-check

import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

// @ts-ignore
import { mount } from "marketing/App";

const Marketing = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [marketingApi, setMarketingApi] = React.useState(null);

  const marketing = React.useRef();

  React.useEffect(() => {
    // Mount all the microfrontends
    setMarketingApi(
      mount(marketing.current, {
        onNavigate: ({ pathname }) => {
          if (location.pathname != pathname) {
            navigate(pathname);
          }
        },
      })
    );
  }, []);

  React.useEffect(() => {
    if (marketingApi) {
      marketingApi.navigate(location);
    }
  }, [location]);

  return <div ref={marketing}></div>;
};

export default Marketing;
