var httpInterceptorModule = angular.module('httpInterceptorModule', []);

httpInterceptorModule.factory('interceptHttp', ['$window', '$location', interceptHttp]);

function interceptHttp ($window, $location) {
	var interceptFactory = {};

	interceptFactory.request = function (config) {
		var token = $window.localStorage.getItem('token');

		if (token) {
			config.headers['x-access-token'] = token;
		}

		return config;
	};

	interceptFactory.response = function(res) {
		//console.log(res.config.headers['x-access-token']);
    	return res;
    }

	interceptFactory.responseError = function (res) {
		$.notify(res.statusText);
		console.log(res);
		if (res.status == 401 || res.status == 403) {
			$window.localStorage.removeItem('token');
			$location.path('/login');
		}

		return res;
	};

	return interceptFactory;
}