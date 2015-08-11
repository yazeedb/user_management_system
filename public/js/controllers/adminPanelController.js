ums.controller('adminPanelController', ['$state', '$stateParams', 'userService', adminPanelController]);

function adminPanelController ($state, $stateParams, userService) {
	var vm = this;

	//Get the user requested for the admin panel
	var getCurrentUser = userService.get($stateParams.username);

	getCurrentUser.success(function (res, status) {
		vm.currentUser = res;
	})
	.error(function (res, status) {
		console.log(res);
	});	

	vm.updateUser = function () {
		var updatedUser = userService.update(vm.currentUser.username, vm.currentUser);
		updatedUser.success(function (res, status) {
			var successNotification = 'Updated ' + vm.currentUser.username;
			$.notify(successNotification, 'success');
			$state.go('users');
		})
		.error(function (res, status) {
			console.log(res);
		});
	}
}