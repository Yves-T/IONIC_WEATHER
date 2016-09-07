(function () {

  angular.module('App')
    .filter('chance', function () {
      return function (chance) {
        if (chance) {
          var value = Math.round(chance * 10);
          return value * 10;
        }
        return 0;
      };
    });

})();
