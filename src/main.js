/* eslint-disable */
import Vue from "vue";
import App from "./App.vue";
import './assets/styles/styles.scss';
import 'normalize.css';
import axios from 'axios';
import store from 'store';
import pangu from 'pangu';
import router from "./router";
import VModal from 'vue-js-modal';
import VueLoading from 'vue-loading-template';
import expirePlugin from './assets/js/expirePlugin';
import mikuConfig from './mikuConfig';

Vue.use(VueLoading);
Vue.use(VModal, { dynamic: true });
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$store = store;
Vue.prototype.$pangu = pangu;
Vue.prototype.mikuConfig = mikuConfig;

store.addPlugin(expirePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")