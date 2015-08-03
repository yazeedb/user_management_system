ums.config(['$locationProvider', '$urlRouterProvider', '$stateProvider', routeConfig]);

function routeConfig ($locationProvider, $urlRouterProvider, $stateProvider) {
	
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
		});

	$urlRouterProvider.otherwise('/');
	$locationProvider.html5Mode(true);
}