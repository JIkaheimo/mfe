// @ts-check

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const DEV_SELECTOR = "#auth-dev--root";

/**
 * Mounts the React application to the given element.
 *
 * @param {Element} element
 * @param {any} options
 */
const mount = (element, { onNavigate, initialPath } = {}) => {
  ReactDOM.render(
    <App onNavigate={onNavigate} initialPath={initialPath} />,
    element
  );

  return {
    onAuthenticate: "auth.authenticate",
    onNavigate: "auth.navigate",
  };
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
