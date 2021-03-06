(function () {

  angular.module('App')
    .factory('Locations', function ($ionicPopup) {
      var Locations = {
        data: [{
          city: 'Mol, BE',
          lat: 51.187204,
          lng: 5.120970
        }],
        getIndex: function (item) {
          var index = -1;
          Locations.data.forEach(function (location, i) {
            if (item.lat == location.lat && item.lng == location.lng) {
              index = i;
            }
          });
          return index;
        },
        toggle: function (item) {
          var index = Locations.getIndex(item);
          if (index >= 0) {
            $ionicPopup.confirm({
              title: 'Are you sure?',
              template: 'This will remove ' + Locations.data[index].city
            }).then(function (res) {
              if (res) {
                Locations.data.splice(index, 1);
              }
            });
          } else {
            Locations.data.push(item);
            $ionicPopup.alert({
              title: 'Location saved'
            });
          }
        },
        primary: function (item) {
          var index = Locations.getIndex(item);
          if (index >= 0) {
            Locations.data.splice(index, 1);
            Locations.data.splice(0, 0, item);
          } else {
            Locations.data.unshift(item);
          }
        }
      };

      return Locations;
    });

})();
