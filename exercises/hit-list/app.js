angular.module("HitListApp", [])

.controller("HitListController", ["$scope", "$http", function ($scope, $http) {
    
//    $http({
//        url: "http://api.vschool.io:6543/hitlist.json",
//    }).then(function(response) {
//        $scope.hitlist = response.data;
//    })
    $http.get('http://api.vschool.io:6543/hitlist.json')
        .then(function (response) {
//            console.log(response.data);
            $scope.hitlist = response.data;
            console.log($scope.name);
        });
}]);

//var req = {
//    data: {
//        name: 'name',
//        image: 'image'
//    }
//}
//
//$http(req).then(function (response) {
//            console.log(response.data);