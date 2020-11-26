import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import vuetify from './plugins/vuetify';
import bootstrap_vue from 'bootstrap-vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vuex from 'vuex';
import store from './store';
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false
Vue.use(bootstrap_vue)
Vue.use(VueAxios, axios)
Vue.use(Vuex)
Vue.use(Vuesax)
new Vue({
  router,
  vuetify,
  bootstrap_vue,
  store,
  render: h => h(App)
}).$mount('#app')
