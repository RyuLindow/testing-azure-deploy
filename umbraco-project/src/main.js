import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "font-awesome/css/font-awesome.min.css";


import "@/assets/css/main.css";

Vue.config.productionTip = false;
Vue.component('VueFontawesome', require('vue-fontawesome-icon/VueFontawesome.vue').default);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");



