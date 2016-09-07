(function () {

  angular.module('App')
    .factory('Settings', function () {
      return {
        units: 'si',
        days: 8
      };
    });

})();
