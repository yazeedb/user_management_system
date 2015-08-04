ums.controller('navController', ['$state', 'authService', navController]);

function navController ($state, authService) {
	var vm = this;

	vm.isUserLoggedIn = authService.getToken();

	vm.logout = authService.removeToken;
}