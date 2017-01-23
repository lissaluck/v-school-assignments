var readline = require('readline-sync');
// Console must greet player with a fun message
var greeting = readline.keyIn("Hello, player! Press your spacebar to begin.")

//Console must ask for the player's name and store it
var name = readline.question('What name do you wish to be known by? ');

console.log("Hello, " + name + "! Good luck on your quest!!");
var playerTotalHP = 1000;

//The console will ask the user to enter a "w" to walk
var walk = readline.keyIn("Press 'w' to walk! " );

toWalk();

// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared
//var outcomes = ["No enemies yet! Still walking...", "Lucky you! Keep walking...", "The coast is clear. Continue walking...", 'enemy'];

//var currentOutcome = "Start walking";

function toWalk() {
    var outcomes = ["No enemies yet! Still walking...", "Lucky you! Keep walking...", "The coast is clear. Continue walking...", 'enemy'];
    var currentOutcome = "Start walking";
    while (currentOutcome.includes("walking")) {
        console.log(currentOutcome);

        var outcome = Math.floor(Math.random() * 4);

        currentOutcome = outcomes[outcome];
}
// If a Wild Enemy appears
    console.log("Found an Enemy!");
}

    
//Enemy generation
// The enemy is random (can be chosen out of a minimum of 3 different enemy names)
function determineType() {
    var type = Math.floor(Math.random() * 3);
    if (type === 0) {
        return "Ancient Dragon";
    } else if (type === 1) {
        return "Prowler";
    } else if (type === 2) {
        return "Mighty Grunt";
    }
}

function determineHitPoints(type) {
    if (type === "Ancient Dragon") {
        return Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    } else if (type === "Prowler") {
        return Math.floor(Math.random() * (79 - 50 + 1)) + 50;
    } else if (type === "Mighty Grunt") {
        return Math.floor(Math.random() * (49 - 20 + 1)) + 20;
    }
}

function determineItem(type) {
    if (type === "Ancient Dragon") {
        return item = "dragon scale";
    } else if (type === "Prowler") {
        return item= "prowler tooth";
    } else if (type === "Mighty Grunt") {
        return item = "grunt wing";
    }
}

function Enemy() {
    this.type = determineType();
    this.hitPoints = determineHitPoints(this.type);
    this.item = determineItem(this.type);
}


var enemy = new Enemy();
console.log(enemy);
var enemyHP = enemy.hitPoints;
var enemyType = enemy.type;
var enemyItem = enemy.item;
console.log(enemyHP);
console.log(enemyType);
console.log(enemyItem);

//The user can decide to attack or run
var choice = readline.question("You have come upon a " + enemyType + "! Do you want to attack or run? Enter 'a' or 'r': ");

// If running, you will choose a random number between 1 and 2 - meaning a 50% chance of escaping

if (choice === "r") {
   var runChance = Math.floor(Math.random() * 2);
    if (runChance === 0) {
        console.log("Lucky you! You've escaped!");
        console.log("Continue on your journey!");
        toWalk();
    } else {
        console.log("Bad luck! You can't get away. Prepare to fight!")
        fight(enemyType, enemyHP, enemyItem);
    }
} else if (choice === "a") {
    console.log("Let's hope you've got what it takes!");
    fight(enemyType, enemyHP, enemyItem);
} else {
    console.log("You don't follow instructions very well! Try again another time.");
}

var playerItems = [];

function fight(enemyType, enemyHP, enemyItem) {
    var playerHP = 0;
    if (enemyType === "Ancient Dragon") {
        playerHP = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    } else if (enemyType === "Prowler") {
        playerHP = Math.floor(Math.random() * (79 - 50 + 1)) + 50;
    } else if (enemyType === "Mighty Grunt") {
        playerHP = Math.floor(Math.random() * (49 - 20 + 1)) + 20;
    };
    if (playerHP > enemyHP) {
        playerItems.push(enemyItem);
        playerNewHP = (enemyHP / 2);
        console.log("You are the victor! You have gained " + playerNewHP + " HP! " + enemyItem + " has been added to your inventory! You live to play another day!!")
        playerTotalHP = playerTotalHP + playerNewHP;
    } else if(playerHP === enemyHP) {
        console.log("It is a draw! You don't gain or lose anything. You simply walk away...")
        toWalk();
    } else {
        console.log("You are a sorry excuse for a warrior! Your hit was only worth " + playerHP + " and the " + enemyType + " has beaten you with " + enemyHP + "!");
        if (playerTotalHP <= 0) {
            console.log("You have been summarily defeated! Your life is at an end.")
        } else {
            console.log("You may have lost this battle, but you're still alive! Rally your courage and move forward.")
            toWalk();
        }
    };
}


////
////// Inventory 
////// When the player kills enemies, they are awarded with items
////// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
////
//var items = [];
////var inventory = [name, playerTotalHP, [items]]
////
////if (userEnters = "Print") {
////    console.log(inventory);
