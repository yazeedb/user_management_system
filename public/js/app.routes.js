ums.config(['$locationProvider', '$urlRouterProvider', '$stateProvider', routeConfig]);

function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider, apiInterceptor) {
	
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'views/pages/home.html',
			controller: 'homeController',
			controllerAs: 'homeCtrl'
		})

		.state('login', {
			url: '/login',
			templateUrl: 'views/pages/login.html',
			controller: 'loginController',
			controllerAs: 'loginCtrl'
		})

		.state('signup', {
			url: '/signup',
			templateUrl: 'views/pages/signup.html',
			controller: 'signupController',
			controllerAs: 'signupCtrl'
		})

		.state('users', {
			url: '/users',
			templateUrl: 'views/pages/users/all.html',
			controller: 'usersController',
			controllerAs: 'usersCtrl'
		})
		.state('adminPanel', {
			url: '/adminPanel/{username}',
			templateUrl: 'views/pages/users/adminPanel.html',
			controller: 'adminPanelController',
			controllerAs: 'apCtrl'
		});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}