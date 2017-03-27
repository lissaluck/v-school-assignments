angular.module("hitListApp", [])

.controller("HitListController", ["$scope", "$http", function ($scope, $http) {
    
    $http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function (response) {
            $scope.hitlist = response.data;
            console.log($scope.name);
        });
}]);
