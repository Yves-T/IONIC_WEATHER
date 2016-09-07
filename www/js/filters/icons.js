(function () {

  angular.module('App')
    .filter('icons', function () {
      var map = {
        'clear-day': 'ion-ios-sunny',
        'clear-night': 'ion-ios-moon',
        rain: 'ion-ios-rainy',
        snow: 'ion-ios-snowy',
        sleet: 'ion-ios-rainy',
        wind: 'ion-ios-flag',
        fog: 'ion-ios-cloud',
        cloudy: 'ion-ios-cloudy',
        'partly-cloudy-day': 'ion-ios-partlysunny',
        'partly-cloudy-night': 'ion-ios-cloudy-night'
      };

      return function (icon) {
        return map[icon] || '';
      };
    })

})();
