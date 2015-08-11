ums.controller('signupController', ['$state', 'userService', signupController]);

function signupController ($state, userService) {
	var vm = this;

	vm.formData = {};

	vm.submitForm = function () {
		var newUser = userService.create(vm.formData);

		newUser.then(function (res) {
			//Notify the user that their account has been created
			$.notify('Signup success. You may now log in', 'success');
			//Go to the login page
			$state.go('login');
		});
	};
}