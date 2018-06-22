import Vue from "vue";
import App from "./App.vue";
import './assets/styles/styles.scss';
import 'normalize.css';
import axios from 'axios';
import store from 'store';
import pangu from 'pangu';
import router from "./router";
Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.prototype.$store = store;

new Vue({
  router,
  render: h => h(App),
  mounted(){
    this.$nextTick(()=>{
      pangu.spacingElementById('app');
    })
  }
}).$mount("#app")