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




// NOTES -------------
	// scopes have different level of inheritance
	// root scope is available anywhere in our app
	// scope is available to our controller