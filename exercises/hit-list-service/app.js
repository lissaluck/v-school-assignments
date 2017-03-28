angular.module("hitListApp", [])

.controller('HitListController', ["$scope", "$http", "httpService", function ($scope, $http, httpService) {
    
    httpService.getHitList()
        .then(function (response) {
        $scope.hitlist = response.data;
    }, function(response) {
        console.log('Error!');
    })
    
}]);