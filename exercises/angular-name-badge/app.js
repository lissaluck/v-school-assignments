var app = angular.module("BadgeApp", []);

app.controller("BadgeAdd", ["$scope", function ($scope) {
    $scope.addBadge = function (person) {
        $scope.badge = person;
        $scope.person = {};
        $scope.validateForm.$setPristine();
        $scope.validateForm.$setUntouched();

    }


    // Could add one at a time as well, like this
    //    $scope.addName = function() {
    //        firstName: $scope.person.firstName,
    //        lastName: $scope.person.lastName;
    //    }

}]);