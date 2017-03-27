angular.module("myApp", [])

.controller("MainController", ["$scope", "BlueService", "RedService", function ($scope, BlueService, RedService) {
    
    $scope.blueCounter = BlueService.blueCounter;
    $scope.redCounter = RedService.redCounter;

    $scope.addBlue = function (blueCounter, redCounter) {
        $scope.blueCounter = BlueService.increment();
        $scope.redCounter = RedService.decrement();
    }

    $scope.addRed = function (redCounter, blueCounter) {
        $scope.redCounter = RedService.increment();
        $scope.blueCounter = BlueService.decrement();
    }


}])