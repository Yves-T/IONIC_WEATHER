(function () {

  angular.module('App')
    .controller('SearchController', function ($scope, $http) {
      $scope.model = {term: ''};

      $scope.search = function () {
        var googleUrl = 'https://maps.googleapis.com/maps/api/geocode/json';
        var params = {
          params: {
            address: $scope.model.term
          }
        };

        $http.get(googleUrl, params)
          .success(function (response) {
            $scope.results = response.results;
          })
          .error(function (err) {
            console.log(err);
          });
      };

    });

})();
