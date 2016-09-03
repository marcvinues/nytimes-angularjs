angular.module("nyTimes").controller("BooksCtrl",["$scope", "$http", function($scope, $http){
  var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=362f4508e923486dbd28ee49cf4693b9";
  $http
  .get(url)
  .then(
    function(response){
      $scope.lists = response.data.results.lists
    },
    function(){
      console.log("Error to get data");
    }
  );
}]);
