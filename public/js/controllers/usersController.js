ums.controller('usersController', ['$http', 'userService', usersController]);

function usersController ($http, userService) {
	var vm = this;

	var currentUser = userService.getMe();
	currentUser.success(function (res, status) {
		vm.isAdmin = res.admin;
	})
	.error(function (res, status) {
		console.log(res);
	});
	
	//API call to get all users from DB
	var allUsers = userService.all();

	allUsers.success(function (res, status) {
		vm.users = res;
	})
	.error(function	(res, status) {
		console.log(res);
	});

	vm.showOneUser = function (user) {
		vm.oneUser = user;
	};
}