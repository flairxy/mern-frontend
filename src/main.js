import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = true;

import axios from "axios";
axios.defaults.baseURL = "http://localhost:4000";

import Navbar from "@/components/layouts/Navbar";
Vue.component("Navbar", Navbar);

require("@/assets/css/styles.css");
Vue.prototype.$fire = new Vue();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
