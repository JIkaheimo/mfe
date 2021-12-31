// @ts-check

import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const DEV_SELECTOR = "#marketing-dev--root";

/**
 * Mounts the React application to the given element.
 *
 * @param {Element} element
 */
const mount = (element) => {
  ReactDOM.render(<App />, element);
};

/**
 * Mounts the React application for development purposes.
 */
// @ts-ignore
if (process.env.NODE_ENV === "development") {
  const $app = document.querySelector(DEV_SELECTOR);
  if ($app) {
    mount($app);
  }
}

export { mount };
