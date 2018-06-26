/* eslint-disable */
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
Vue.prototype.$pangu = pangu;

var namespace = 'expire_mixin'
function expirePlugin() {
	var expirations = this.createStore(this.storage, null, this._namespacePrefix+namespace)
	
	return {
		set: expire_set,
		get: expire_get,
		remove: expire_remove,
		getExpiration: getExpiration,
		removeExpiredKeys: removeExpiredKeys
	}
	
	function expire_set(super_fn, key, val, expiration) {
		if (!this.hasNamespace(namespace)) {
			expirations.set(key, expiration)
		}
		return super_fn()
	}
	
	function expire_get(super_fn, key) {
		if (!this.hasNamespace(namespace)) {
			_checkExpiration.call(this, key)
		}
		return super_fn()
	}
	
	function expire_remove(super_fn, key) {
		if (!this.hasNamespace(namespace)) {
			expirations.remove(key)
		}
		return super_fn()
	}
	
	function getExpiration(_, key) {
		return expirations.get(key)
	}
	
	function removeExpiredKeys(_) {
		var keys = []
		this.each(function(val, key) {
			keys.push(key)
		})
		for (var i=0; i<keys.length; i++) {
			_checkExpiration.call(this, keys[i])
		}
	}
	
	function _checkExpiration(key) {
		var expiration = expirations.get(key, Number.MAX_VALUE)
		if (expiration <= new Date().getTime()) {
			this.raw.remove(key)
			expirations.remove(key)
		}
	}
	
}

store.addPlugin(expirePlugin);

new Vue({
  router,
  render: h => h(App),
}).$mount("#app")