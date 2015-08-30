angular.module('starter.controllers', [])

.controller('BooksCtrl', ['$scope', '$http', function ($scope, $http) {
		// set books as an empty array
 		$scope.books = [];
 		// set book as an object inside the array
 		$scope.book = {};

 		// Simple GET request example :
 		$http.get('http://daretodiscover.herokuapp.com/books')
 		.then(function(response) {
 				// we're filling in our scope.books with the api data
 		    $scope.books = response.data;
 		    // when the response is available
 		  });

 		$scope.createBook = function() {
 			// Simple POST request example (passing data) :
 			$http.post('http://daretodiscover.herokuapp.com/books/', $scope.book) // we're bringing $scope.book over the Api
 			  .then(function(response) {
 			  	// we're setting newBook to be one data in the database
 			  	var newBook = response.data;
 			  	// this clears out the form after we submit (good UI)
 			  	$scope.book = {};
 			  	// our scope.books [] doesn't know about this book yet so we have to push it in to Scope 
 			  	$scope.books.push(newBook);
 			  });
 		};

 		$scope.updateBook = function(book) {
			$http.put('http://daretodiscover.herokuapp.com/books/' + book.id, book) // we're bringing $scope.book over the Api
			  .then(function(response) {
			  	book.editForm = false; 
			  });
 		};

 		$scope.deleteBook = function(book) {
 			$http.delete('http://daretodiscover.herokuapp.com/books/' + book.id)
 				.then(function(response) {
 					var bookIndex = $scope.books.indexOf(book);
 					$scope.books.splice(bookIndex, 1);
 				})
 		}

	}])
	
	.controller('BooksShowCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
		$scope.book = {}
		
		$http.get('http://daretodiscover.herokuapp.com/books/' + $routeParams.id)
		.then(function(response) {
				// we're filling in our scope.books with the api data
		    $scope.book = response.data;
		    // when the response is available
		  });

	}]);