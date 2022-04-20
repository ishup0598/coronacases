const URL = 'https://corona.lmao.ninja/v2/all';

let app = angular.module('MyApp', []);
app.controller('MyCtrlr', ($scope, $http) => {
  $scope.title = 'Stay Home Stay Safe';

  console.log('App Loaded');

  $http.get(URL).then(
    (response) => {
      console.log(response.data);

      $scope.all_data = response.data;
    },
    (error) => {
      console.log(error);
    }
  );

  $scope.get_c_data = () => {
    let country = $scope.c;
    if (country == '') {
      $scope.c_data = undefined;
      return;
    }
    $http.get(`https://corona.lmao.ninja/v2/countries/${country}`).then(
      (response) => {
        console.log(response.daata);
        $scope.c_data = response.data;
      },
      (error) => {
        console.log(error);
      }
    );
  };
});
