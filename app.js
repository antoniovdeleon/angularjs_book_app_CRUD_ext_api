angular.module('bookApp', ['ngRoute', 'starter.controllers'])

	.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
	   $routeProvider
	   .when('/', {
	       templateUrl: 'partials/bookIndex.html',
	       controller: 'BooksCtrl'
	     })
	   .when('/books/:id', {
	       templateUrl: 'partials/booksShow.html',
	       controller: 'BooksShowCtrl'
	     })
	   .when('/about', {
	   		templateUrl: 'partials/about.html',
	   		controller: ''
	   	})
	   .otherwise({
	       redirectTo: '/'
	     });

	   // take out the # on the routes, but page doesn't refresh right anymore
	   $locationProvider.html5Mode({
	     enabled: true,
	     requireBase: false
	   });
	}])



