ums.controller('usersController', ['$http', 'userService', usersController]);

function usersController ($http, userService) {
	var vm = this;
	
	//API call to get all users from DB
	var allUsers = userService.all();

	allUsers.success(function (res, status) {
		console.log(res);
		vm.users = res;
	})
	.error(function	(res, status) {
		console.log(res);
	});
}