angular.module('bookApp', ['ngRoute', 'starter.controllers'])

	.config(['$routeProvider', function ($routeProvider) {
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
	}])



