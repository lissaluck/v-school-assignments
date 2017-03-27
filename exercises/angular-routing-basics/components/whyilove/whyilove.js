angular.module("RoutingApp")

.controller("WhyILoveController", ["$scope", function ($scope) {
    $scope.viewLoaded = function () {
        $('.carousel ').carousel()
    }

    $scope.title = "Why I Love Colorado!";
}]);