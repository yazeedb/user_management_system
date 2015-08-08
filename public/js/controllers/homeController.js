ums.controller('homeController', ['$http', '$state', 'authService', homeController]);

function homeController ($http, $state, authService) {
	var vm = this;

	//Requests the route that returns our JWT
	var userProfile = $http.get('/api/me');

	userProfile.success(function (res, status) {
		vm.userProfile = res;
	})
	.error(function (res, status) {
		console.log(res);
	});
}