(function () {

  angular.module('App')
    .controller('WeatherController',
      function ($scope, $http, $stateParams, $ionicActionSheet, Settings, Locations, $ionicModal) {

        $scope.params = $stateParams;
        $scope.settings = Settings;

        var params = {
          params: {
            lat: $stateParams.lat,
            lng: $stateParams.lng,
            units: Settings.units
          }
        };

        $http.get('http://ionic.deontwikkelaar.be/weather/', params)
          .success(function (forecast) {
            $scope.forecast = forecast;
          })
          .error(function (err) {
            console.log(err);
          });

        // calculations for ion-scroll pages

        var barHeight = document.getElementsByTagName('ion-header-bar')[0].clientHeight;

        $scope.getWidth = function () {
          return window.innerWidth + 'px';
        };

        $scope.getTotalHeight = function () {
          return parseInt(parseInt($scope.getHeight(), 10) * 3, 10) + 'px';
        };

        $scope.getHeight = function () {
          return parseInt(window.innerHeight - barHeight) + 'px';
        };

        // methods for action menu and modal

        $scope.showModal = function () {
          if ($scope.modal) {
            $scope.modal.show();
          } else {
            $ionicModal.fromTemplateUrl('views/weather/modal-chart.html', {
              scope: $scope
            }).then(function (modal) {
              $scope.modal = modal;
              var days = [];
              var day = Date.now();
              for (var i = 0; i < 365; i++) {
                day += 1000 * 60 * 60 * 24;
                days.push(SunCalc.getTimes(day, $scope.params.lat, $scope.params.lng));
              }
              $scope.chart = days;
              $scope.modal.show();
            });
          }
        };

        $scope.hideModal = function () {
          $scope.modal.hide();
        };

        $scope.$on('$destroy', function () {
          $scope.modal.remove();
        });

        $scope.showOptions = function () {
          var sheet = $ionicActionSheet.show({
            buttons: [
              {text: 'Toggle Favorite'},
              {text: 'Set as Primary'},
              {text: 'Sunrise Sunset Chart'}
            ],
            cancelText: 'Cancel',
            buttonClicked: function (index) {
              if (index === 0) {
                Locations.toggle($stateParams);
              }
              if (index === 1) {
                Locations.primary($stateParams);
              }
              if (index === 2) {
                $scope.showModal();
              }
              return true;
            }
          });
        };

      });

})();
