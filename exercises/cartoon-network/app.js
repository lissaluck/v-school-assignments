angular.module("cartoonApp", [])

.controller ("CartoonController", ["$scope", "CartoonService", function ($scope, CartoonService) {

    $scope.cartoons =[];

    $scope.addCartoon = function (cartoon) {
        $scope.cartoons = CartoonService.addCartoon(cartoon, $scope.cartoons);
    }

}])


/**
 * Created by lissaluck on 3/28/17.
 */
