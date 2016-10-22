var app = angular.module("MyDeviceList", []);
app.controller("myCtrl", function ($scope) {
  var http = new Dozuki.http.jquery($);
  var dozuki = new Dozuki("www.ifixit.com", http);

  $scope.products = [];
  $scope.products.push("Filler Device 1");
  $scope.products.push("Filler Device 2");
  $scope.queryForDevice = function (query) {
    dozuki.search.get($scope.query, "device").then(function (guide) {
      $scope.results = guide.results;
    });
  }

  $scope.addDevice = function (device) {
    products.push(device);
  }
});