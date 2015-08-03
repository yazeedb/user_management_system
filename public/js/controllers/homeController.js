ums.controller('homeController', ['$state', homeController]);

function homeController ($state) {
	if (!localStorage.token) {
		$state.go('login');
	}
}