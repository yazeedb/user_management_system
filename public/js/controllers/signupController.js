ums.controller('signupController', ['$state', 'userService', signupController]);

function signupController ($state, userService) {
	var vm = this;

	vm.formData = {};

	vm.submitForm = function () {
		var newUser = userService.create(vm.formData);

		newUser.success(function (res, status) {
			//Notify the user that their account has been created
			$.notify('Signup successful. You may now log in', 'success');
			//Go to the login page
			$state.go('login');
		});
	};
}