angular.module("promisesApp")

.service("PokeService", [function() {
    
    this.addPokemon = function(pokemonName, favePokemon) {
        favePokemon.push(pokemonName);
        return favePokemon;
    }
    
    this.removePokemon = function(pokemonName, favePokemon) {
        var i = favePokemon.indexOf(pokemonName);
        favePokemon.splice(i, 1);
        return favePokemon;
    }


}]);