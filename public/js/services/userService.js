ums.service('userService', ['$http', userService]);

function userService ($http) {
	
	this.get = function (username) {
		return $http.get('/api/users' + username);
	};

	this.all = function () {
		return $http.get('/api/users');
	};

	this.create = function (userData) {
		return $http.post('/api/users', userData);
	}

	this.update = function (username, userData) {
		return $http.post('/api/users' + username, userData);
	};

	this.delete = function (username) {
		return $http.delete('/api/users' + username);
	};

	this.getMe = function () {
		return $http.get('/api/me', { cache: true });
	};
}