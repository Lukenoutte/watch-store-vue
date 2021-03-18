import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "./store";
import icons from "v-svg-icons";

Vue.component("icon", icons);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
