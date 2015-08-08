ums.controller('usersController', ['$http', '$stateParams', 'userService', usersController]);

function usersController ($http, $stateParams, userService) {
	var vm = this;
	
	//API call to get all users from DB
	var allUsers = userService.all();

	allUsers.success(function (res, status) {
		vm.users = res;
	})
	.error(function	(res, status) {
		console.log(res);
	});

	vm.showOneUser = function (user) {
		console.log(user.etc);
		vm.oneUser = user;
	};
}