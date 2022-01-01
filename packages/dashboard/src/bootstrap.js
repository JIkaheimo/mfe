// @ts-check

import { createApp } from "vue";
import Dashboard from "./components/Dashboard.vue";
import PrimeVue from "primevue/config";

const DEV_SELECTOR = "#dashboard-dev--root";

/**
 * Mounts the React application to the given element.
 *
 * @param {Element} element
 * @param {any} options
 */
const mount = (element, { onNavigate, initialPath } = {}) => {
  createApp(Dashboard).use(PrimeVue).mount(element);

  return {
    onNavigate: "dashboard.navigate",
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
