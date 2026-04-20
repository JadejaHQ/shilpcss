/**
 * Single instance for a unique key
 */
class Singleton {
	//
	static instances = new Map();

	static get(key) {
		let instance = Singleton.instances.get(key);

		if (!instance) {
			Singleton.instances.set(key, new Singleton(key));
			instance = Singleton.instances.get(key);
		}

		return instance;
	}

	/* =========================
		HANDLE PROPERTIES
	========================= */

	_set(key, value) {
		this[key] = value;
	}

	_get(key) {
		return this[key];
	}

	/* =========================
		HANDLE METHODS
	========================= */

	_register(instance, key) {
		this._set(key, instance[key].bind(this));
	}

	_registerMethods(instance, methods) {
		methods.forEach((method) => {
			this._register(instance, method);
		});
	}
}

/* ============================================================================================= */

export default Singleton;
