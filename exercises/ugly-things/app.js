angular.module("UglyApp", [])

.controller("UglyController", ['$scope', function ($scope) {
    $scope.uglies = [];
    $scope.addUgly = function() {
        $scope.uglies.push($scope.ugly);
        $scope.ugly = {};
        console.log($scope.uglies);
    }
    
}]);


//// How to use localStorage        
//    localStorage.setItem("uglies", JSON.stringify($scope.uglies));
//    localStorage.uglies = JSON.stringify($scope.uglies);

//    if (localStorage.uglies) {
//        $scope.uglies = angular.fromJSON(localStorage.uglies);
//    }

//    localStorage.setItem("uglies", JSON.stringify($scope.uglies));

//    $scope.delete = function(deleted) {
//        $scope.uglies.splice(deleted, 1);
//        localStorage.setItem("uglies", JSON.strigify($scope.uglies))
//    }


//// If you do it this way, you have to create each variable by hand
//    $scope.addUgly = {
//        var name = $scope.ugly.name;
//        var image = $scope.ugly.img;
//        var desc = $scope.ugly.description;
//}
