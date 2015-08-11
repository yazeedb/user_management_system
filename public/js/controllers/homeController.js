ums.controller('homeController', ['$rootScope', '$http', '$state', 'authService', homeController]);

function homeController ($rootScope, $http, $state, authService) {
	var vm = this;

	//Requests the route that returns our JWT
	var userProfile = $http.get('/api/me');

	userProfile.success(function (res, status) {
		$rootScope.isAdmin = res.admin;
		vm.userProfile = res;
	})
	.error(function (res, status) {
		console.log(res);
	});
}