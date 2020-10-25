import Vue from 'vue'
import App from './App.vue'
import router from "@/router";
import vuetify from './plugins/vuetify';
import bootstrap_vue from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(bootstrap_vue)
new Vue({
  router,
  vuetify,
  bootstrap_vue,
  render: h => h(App)
}).$mount('#app')
