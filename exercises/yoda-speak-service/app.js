var app = angular.module("myApp", []);

app.controller("myController", ["$scope", "$http", "yodifyService", function($scope, $http, yodifyService) {
    $scope.submitPhrase = function(phrase) {
        yodifyService.getPhrase(phrase).then(function(response) {
            $scope.yodaPhrase = response.data
        })
    }
}])
