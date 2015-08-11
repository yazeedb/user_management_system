ums.controller('loginController', ['$rootScope', '$state', 'authService', loginController]);

function loginController ($rootScope, $state, authService) {
	var vm = this;

	vm.formData = {};

	vm.doLogin = function () {
		var loginPromise = authService.login(vm.formData);

		//If successful
		loginPromise.success(function (res, status) {
			//Set the token in localStorage
			authService.setToken(res.token);
			//Set isLoggedIn to true in order to show our navbar
			$rootScope.isLoggedIn = true;
			//Redirect to the home page
			$state.go('home');
		})
		.error(function (res, status) {
			console.log(res);
			console.log(status);
		})
	};
}