angular.module('nyTimes', ['ngRoute', 'route-segment', 'view-segment']);

angular.module('nyTimes').config(["$routeSegmentProvider", function($routeSegmentProvider){

  $routeSegmentProvider.when("/books", "books");

  $routeSegmentProvider.segment("books",{
    controller: 'BooksCtrl',
    templateUrl: 'views/Books.html'
  });

}]);
