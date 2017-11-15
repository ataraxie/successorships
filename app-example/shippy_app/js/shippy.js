let Shippy = (function() {

	let STATE = {};

	let currentFlywebService = null;

	let appName;
	let appSpec;

	let listeners = {};

	function trigger(eventName, data) {
		if (listeners[eventName]) {
			for (let listener of listeners[eventName]) {
				listener(data);
			}
		}
	}

	function on(eventName, callback) {
		if (!listeners[eventName]) {
			listeners[eventName] = [];
		}
		listeners[eventName].push(callback);
	}

	function register(newAppName, newAppSpec) {
		appName = newAppName;
		appSpec = newAppSpec;

		if (typeof appSpec.init === "function") {
			appSpec.init(STATE);
		}
	}

	function call(operationName, params) {
		// If       I'm the server, call appSpec.operations[operationName](STATE, params)
		//          and broadcast the changes
		// Else If  I'm the client, send a WebSocket message to the server with operationName and params
		console.log("Operation called: " + operationName + "; params: " + JSON.stringify(params));
	}

	window.addEventListener("flywebServicesChanged", function(event) {
		currentFlywebService = null;
		if (appName) {
			let services = JSON.parse(event.detail).services;
			for (let service of services) {
				if (service.serviceName === appName) {
					currentFlywebService = service;
				}
			}
		}
		console.log(currentFlywebService);
	});

	return {
		register: register,
		on: on,
		call: call
	};

}());