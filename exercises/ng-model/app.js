var app = angular.module("ModelApp", []);

app.controller("ModelController", function ($scope) {
    $scope.person = {
        firstName: "Melissa",
        lastName: "Luckett",
        age: 39
    };
})