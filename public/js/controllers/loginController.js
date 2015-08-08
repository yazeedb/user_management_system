ums.controller('loginController', ['$state', 'authService', loginController]);

function loginController ($state, authService) {
	var vm = this;

	vm.formData = {};

	vm.doLogin = function (userData) {
		var loginPromise = authService.login(userData);

		loginPromise.success(function (res, status) {
			//If successful, set the token in localStorage and redirect to the home page
			authService.setToken(res.token);

			$state.go('home');
		})
		.error(function (res, status) {
			console.log(res);
			console.log(status);
		})
	};
}