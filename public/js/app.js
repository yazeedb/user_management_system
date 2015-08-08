var ums = angular.module('ums', ['ui.router', 'httpInterceptorModule', 'wordFilters']);

ums.config(['$httpProvider', function ($httpProvider) {
	//This will attach our token as a header before every API call
	$httpProvider.interceptors.push(interceptHttp);
}])