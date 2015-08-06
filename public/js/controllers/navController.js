ums.controller('navController', ['$state', 'authService', navController]);

function navController ($state, authService) {
	var vm = this;

	vm.logout = function () {
		authService.removeToken();
		//$state.go('login');
	};
}