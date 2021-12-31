// @ts-check

import React from "react";

// @ts-ignore
import { mount } from "marketing/App";

const App = () => {
  const marketing = React.useRef(null);

  React.useEffect(() => {
    // Mount all the microfrontends
    mount(marketing.current);
  });

  return (
    <div>
      <h1>Hello World</h1>
      <hr />
      <div ref={marketing} id='marketing'></div>
    </div>
  );
};

export default App;
