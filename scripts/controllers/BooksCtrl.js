angular.module("nyTimes").controller("BooksCtrl",["$scope", "$http", function($scope, $http){

  var url = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key=362f4508e923486dbd28ee49cf4693b9";

  $http
  .get(url)
  .then(
    function(response,element){

      // $scope.book = result.data.results.lists
      for (i = 0; i < response.data.results.lists.length; i += 1 ) {
            $scope.book = response.data.results.lists[i];

            for (var b = 0; b < $scope.book.books.length; b++) {
              $scope.allbooks = $scope.book.books[b];
              // angular.forEach($scope.allbooks, function(a){
              //     angular.element(document.getElementById('section')).html($scope.allbooks);
              // });
            }
          }

          debugger
    },
    function(){
      console.log("Error to get data");
    }
  );
}]);
