angular.module("promisesApp", [])

.controller("MainController", ["$scope", "PokeService", function ($scope, PokeService) {

    $scope.favePokemon = [];

    $scope.addPokemon = function (pokemonNameInput) {
        $scope.favePokemon = PokeService.addPokemon(pokemonNameInput, $scope.favePokemon);
    }

    $scope.removePokemon = function (pokemonNameInput) {
        $scope.favePokemon = PokeService.removePokemon(pokemonNameInput, $scope.favePokemon);
    }


}]);