var httpInterceptorModule = angular.module('httpInterceptorModule', []);

httpInterceptorModule.factory('interceptHttp', ['$window', interceptHttp]);

function interceptHttp ($window) {
	var interceptFactory = {};

	interceptFactory.request = function (config) {
		var token = $window.localStorage.getItem('token');

		if (token) {
			config.headers['x-access-token'] = token;
		}

		return config;
	};

	return interceptFactory;
}