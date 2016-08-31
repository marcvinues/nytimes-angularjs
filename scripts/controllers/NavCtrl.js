angular.module("nyTimes").controller("NavCtrl",["$scope","$routeSegment", function($scope, $routeSegment){
  $scope.routeBook = function(){
    return $routeSegment.startsWith("books");
  };
}]);
