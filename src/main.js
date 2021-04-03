import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { store } from "./store";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSadTear } from '@fortawesome/free-regular-svg-icons'
import { faStopwatch, faShoppingCart, faCartArrowDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStopwatch, faShoppingCart, faCartArrowDown, faSadTear)

Vue.component("icon", FontAwesomeIcon);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
