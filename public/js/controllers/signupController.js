ums.controller('signupController', ['$state', 'userService', signupController]);

function signupController ($state, userService) {
	var vm = this;

	vm.formData = {};

	vm.submitForm = function (formData) {
		userService.create(formData)
		.success(function (res, status) {
			$state.go('/login');
		})
		.error(function (res, status) {
			console.log(res);
			console.log(status);
		})
	};
}