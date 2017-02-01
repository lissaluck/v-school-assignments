// new penguins party population 1 million
// new communists party population also 1 million

function Party(name, population) {
    this.name = name;
    this.population = population;
    this.isAlive = function () {
        return this.population > 0;;
    }
}

var penguins = new Party("penguins", 1000000);
var communists = new Party("communists", 1000000);

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}



function attack() {
    var coinFlip = getRandomInt(1, 2);
    console.log("Attack: " + coinFlip);
    if (coinFlip === 1) {
        // Penguins attack
        sendNuke(penguins, onHit, onMiss);
    } else {
        //Communists attack
        sendNuke(communists, onHit, onMiss);
    }
}

function sendNuke(party, onHit, onMiss) {
    //party = JS object to be attacked
    //onHit = callback if successful
    //onMiss = callback if unsuccessful
    var coinFlip = getRandomInt(1, 2);
    console.log(coinFlip);
    if (coinFlip === 1) {
        onMiss(party);
    } else {
        onHit(party);
    }
}

// callback functions
function onMiss(party) {
    if (party.name === 'penguins') {
        var otherParty = 'communists';
    } else {
        var otherParty = 'penguins';
    }
    console.log(party.name);
    console.log("The " + party.name + " nuke missed the " + otherParty + " and instead landed in the ocean");
}

function onHit(party) {
    console.log("Party: ", party.name);
    if (party.name === 'penguins') {
        var otherParty = 'communists';
    } else {
        var otherParty = 'penguins';
    }
    var lostPop = getRandomInt(100000, 200000)
    console.log("Direct hit!");
    console.log("The " + otherParty + " have lost " + lostPop + " members!")
    if (party.name === 'penguins') {
        console.log(communists.population);
        communists.population = communists.population - lostPop;
        isAlive(communists.name, communists.population);
    } else {
        penguins.population = penguins.population - lostPop;
        isAlive(penguins.name, penguins.population);
    }
}

function isAlive(party, population) {
    if (population <= 0) {
        console.log("The " + party + " have died a miserable death!");
        isGameRunning = false;
        return false;
    } else {
        return true;
    }
}

var isGameRunning = true;

while (isGameRunning) {
    attack();
}