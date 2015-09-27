var httpInterceptorModule = angular.module('httpInterceptorModule', []);

httpInterceptorModule.factory('interceptHttp', ['$window', '$location', interceptHttp]);

function interceptHttp ($window, $location) {
	var interceptFactory = {};

	interceptFactory.request = function (config) {
		var token = $window.localStorage.getItem('token');

		if (token) {
			config.headers['Authorization'] = token;
		}

		return config;
	};

	interceptFactory.responseError = function (res) {
		var errorNotification = res.data.message;

	//	$.notify(errorNotification, 'error');

		if (res.status == 401 || res.status == 403) {
			$window.localStorage.removeItem('token');
			$location.path('/login');
		}

		return res;
	};

	return interceptFactory;
}