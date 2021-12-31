// @ts-check

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const DEV_SELECTOR = "#marketing-dev--root";

/**
 * Mounts the React application to the given element.
 *
 * @param {Element} element
 * @param {any} options
 */
const mount = (element, { onNavigate } = {}) => {
  ReactDOM.render(<App onNavigate={onNavigate} />, element);

  return {
    navigate: (location) => {
      if (location) {
        const event = new CustomEvent("navigate", { detail: location });
        window.dispatchEvent(event);
      }
    },
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
