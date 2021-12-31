// @ts-check

import React from "react";

// @ts-ignore
import { mount } from "marketing/App";

console.log("test");

const App = () => {
  const marketing = React.useRef(null);

  React.useEffect(() => {
    // Mount all the microfrontends
    mount(marketing.current);
  });

  return <div ref={marketing} id='marketing'></div>;
};

export default App;
