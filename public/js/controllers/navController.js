ums.controller('navController', ['$rootScope','$scope', '$state', 'authService', navController]);

function navController ($rootScope, $scope, $state, authService) {
	var vm = this;

	$rootScope.isLoggedIn = authService.getToken();

	vm.logout = function () {
		$rootScope.isLoggedIn = false;
		authService.removeToken();
	};
}