(function () {

  angular.module('App')
    .filter('timezone', function () {
      return function (input, timezone) {
        if (input && timezone) {
          var time = moment.tz(input * 1000, timezone);
          return time.format('LT');
        }
        return '';
      };
    });

})();
