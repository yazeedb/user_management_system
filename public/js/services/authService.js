ums.service('authService', ['$window', '$http', authService]);

function authService ($window, $http) {
	//Get a token from localStorage, if it exists
	this.getToken = function () {
		return $window.localStorage.getItem('token');
	};

	this.isLoggedIn = function () {
		return this.getToken() ? true : false;
	};

	//Set a new token
	this.setToken = function (token) {
		if (!token)
			throw new Error('Cannot set token. No token provided');

		$window.localStorage.setItem('token', token);
		//Set access token in headers for future API calls
		this.setHeaders();
	};

	this.setHeaders = function () {
		var token = this.getToken();
		
		if (token) {
			$http.defaults.headers.common['x-access-token'] = token;
		}
		else {
			throw new Error('Can\'t set headers because no token was provided');
		}
	};

	//Remove an existing token
	this.removeToken = function () {
		if (!this.isLoggedIn())
			throw new Error('There is no token to remove!');
		
		$window.localStorage.removeItem('token');
	};

	this.login = function (userData) {
		return $http.post('/api/authenticate', userData);
	};
}