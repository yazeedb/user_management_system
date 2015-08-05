ums.controller('usersController', ['userService', usersController]);

function usersController (userService) {
	var vm = this;

	//API call to get all users from DB
	var allUsers = userService.all()
	
	
}