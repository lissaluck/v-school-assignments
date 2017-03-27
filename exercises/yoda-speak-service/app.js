var app = angular.module("myApp", []);

app.controller("MyController", ["$scope", "$http", "yodifyService", function($scope, $http, yodifyService) {
    $scope.submitPhrase = function(phrase) {
        yodifyService.getPhrase(phrase).then(function(response) {
            $scope.yodaPhrase = response.data
        })
    }
}]);
