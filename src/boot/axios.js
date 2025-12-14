import { boot } from "quasar/wrappers";
import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://your-api-url.com", // change this
});

export default boot(({ app }) => {
  // make axios available globally
  app.config.globalProperties.$axios = axios;
  app.config.globalProperties.$api = api;
});

export { api };

