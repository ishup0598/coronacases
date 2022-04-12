const URL = 'https://corona.lmao.ninja/v2/all';

let app = angular.module('MyApp', []);
app.controller('MyCtrl', ($scope, $http) => {
  $scope.title = 'COVID-19 ';

  console.log('APP Loaded');

  $http.get(URL).then(
    (response) => {
      console.log(response.data);

      $scope.all_data = response.data;
    },
    (error) => {
      console.log(error);
    }
  );

  //get country data

  $scope.get_c_data = () => {
    let country = $scope.c;
    if (country == '') {
      $scope.c_data = undefined;
      return;
    }
    $http.get(`https://corona.lmao.ninja/v2/countries/${country}`).then(
      (response) => {
        console.log(response.data);
        $scope.c_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
});

app.controller(
  'slideShowController',
  function slideShowController($scope, $timeout) {
    var slidesInSlideshow = 4;
    var slidesTimeIntervalInMs = 3000;

    $scope.slideshow = 1;
    var slideTimer = $timeout(function interval() {
      $scope.slideshow = ($scope.slideshow % slidesInSlideshow) + 1;
      slideTimer = $timeout(interval, slidesTimeIntervalInMs);
    }, slidesTimeIntervalInMs);
  }
);
(function () {
  'use strict';

  angular
    .module('navBarDemoBasicUsage', ['ngMaterial'])
    .controller('AppCtrl', AppCtrl);

  function AppCtrl($scope) {
    $scope.currentNavItem = 'home';

    $scope.goto = function (page) {
      $scope.status = 'Goto ' + page;
    };
  }
})();
