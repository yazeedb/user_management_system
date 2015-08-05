ums.controller('homeController', ['$http', '$state', 'authService', homeController]);

function homeController ($http, $state, authService) {
	var vm = this;

	//If the user is not logged in, they should be redirected to the login page immediately
	if (!authService.isLoggedIn())
		return $state.go('login');
	
	//Otherwise, if user is logged in
	//Set token in $http request headers for API calls to protected routes
	authService.setHeaders();

	//Requests the route that returns our JWT
	var userProfile = $http.get('/api/me');

	userProfile.success(function (res, status) {
		vm.userProfile = res;
	})
	.error(function (res, status) {
		console.log(res);
	});
}