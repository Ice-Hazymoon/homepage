/*
 * File: expirePlugin.js
 * Project: router
 * File Created: Tuesday, 26th June 2018 9:38:41 pm
 * Author: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Last Modified: Tuesday, 26th June 2018 9:39:07 pm
 * Modified By: Ice-Hazymoon (imiku.me@gmail.com)
 * -----
 * Copyright 2017 - 2018
 */
// expirePlugin
const namespace = 'expire_mixin'
export default function expirePlugin() {
	let expirations = this.createStore(this.storage, null, this._namespacePrefix+namespace)
	
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
		let keys = []
		this.each(function(val, key) {
			keys.push(key)
		})
		for (let i=0; i<keys.length; i++) {
			_checkExpiration.call(this, keys[i])
		}
	}
	
	function _checkExpiration(key) {
		let expiration = expirations.get(key, Number.MAX_VALUE)
		if (expiration <= new Date().getTime()) {
			this.raw.remove(key)
			expirations.remove(key)
		}
	}
	
}