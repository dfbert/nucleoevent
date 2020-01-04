import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueFacebook from 'vue-facebook';
import BaseLink from "@/components/BaseLink.vue";

Vue.use(VueFacebook);
Vue.component('base-link', BaseLink);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
