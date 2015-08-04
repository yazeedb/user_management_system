ums.controller('homeController', ['$http', '$state', 'authService', homeController]);

function homeController ($http, $state, authService) {
	var vm = this;

	vm.isUserLoggedIn = authService.getToken();

	//If the user is not logged in, they should be redirected to the login page immediately
	if (!vm.isUserLoggedIn)
		return $state.go('login');
		//Calling "return" stops the function from executing past this point

	//Otherwise, if user is logged in
	authService.setHeaders();

	var userProfile = $http.get('/api/me');

	userProfile.success(function (res, status) {
		vm.userProfile = res;
		console.log(vm);
	})
	.error(function (res, status) {
		console.log(res);
	});
}