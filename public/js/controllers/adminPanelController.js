ums.controller('adminPanelController', ['$stateParams', 'userService', adminPanelController]);

function adminPanelController ($stateParams, userService) {
	var vm = this;

	//Get the user requested for the admin panel
	var getCurrentUser = userService.get($stateParams.username);

	getCurrentUser.success(function (res, status) {
		vm.currentUser = res;

		//Set the full name of the user
		var fullName = userService.makeFullName(vm.currentUser.firstName, vm.currentUser.lastName);
		vm.currentUser.fullName = fullName; 
	})
	.error(function (res, status) {
		console.log(res);
	});	

	vm.updateUser = function () {
		console.log(vm.currentUser);
	}
}