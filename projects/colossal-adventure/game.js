var readline = require('readline-sync');
// Console must greet player with a fun message
var greeting = readline.keyIn("Hello, player! Press your spacebar to begin.")

//Console must ask for the player's name and store it
var name = readline.question('What name do you wish to be known by? ');

console.log("Hello, " + name + "! Good luck on your quest!!");
var playerTotalHP = 500;


var playerItems = "";
toWalk(playerItems);

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
        return item = "prowler tooth";
    } else if (type === "Mighty Grunt") {
        return item = "grunt wing";
    }
}

function Enemy() {
    this.type = determineType();
    this.hitPoints = determineHitPoints(this.type);
    this.item = determineItem(this.type);
}


function fight() {
    var currentPlayerHP = 0;
    for (i = 0; i < 1; i++) {
        var enemy = new Enemy();
        var enemyType = enemy.type;
        var enemyHP = enemy.hitPoints;
        var enemyItem = enemy.item;
    }
    //The user can decide to attack or run
    var choice = readline.question("You have come upon a " + enemyType + "! Do you want to attack or run? Enter 'a' or 'r': ");

    // If running, the program will generate a random number between 1 and 2 - meaning a 50% chance of escaping

    if (choice === "r") {
        var runChance = Math.floor(Math.random() * 2);
        if (runChance === 0) {
            console.log("Lucky you! You've escaped!");
            console.log("Continue on your journey!");
            toWalk(playerItems);
        } else {
            console.log("Bad luck! You can't get away. Prepare to fight!");
        }
    } else {
        console.log("Let's hope you've got what it takes!");
    }

    if (enemyType === "Ancient Dragon") {
        currentPlayerHP = Math.floor(Math.random() * (100 - 80 + 1)) + 80;
    } else if (enemyType === "Prowler") {
        currentPlayerHP = Math.floor(Math.random() * (79 - 50 + 1)) + 50;
    } else if (enemyType === "Mighty Grunt") {
        currentPlayerHP = Math.floor(Math.random() * (49 - 20 + 1)) + 20;
    };
    if (currentPlayerHP > enemyHP) {
        if (playerItems === "") {
            playerItems = enemyItem;
        } else {
            playerItems += (", " + enemyItem);
        }
        playerAddHP = currentPlayerHP - enemyHP;
        console.log("You are the victor! You won with " + currentPlayerHP + " to the " + enemyType + "'s " + enemyHP + " hit points! You have gained " + playerAddHP + " HP! A " + enemyItem + " has been added to your inventory!")
        playerTotalHP = playerTotalHP + playerAddHP;
        console.log("You have " + playerTotalHP + " hit points left! Keep walking...")
        toWalk(playerItems);
    } else if (currentPlayerHP === enemyHP) {
        console.log("It is a draw! You don't gain or lose anything. You simply walk away...")
        toWalk(playerItems);
    } else {
        playerTotalHP = playerTotalHP - enemyHP;
        console.log("You are a sorry excuse for a warrior! Your hit was only worth " + currentPlayerHP + " and the " + enemyType + " has beaten you with " + enemyHP + "!");
        if (playerTotalHP <= 0) {
            console.log("You have been summarily defeated! Your life is at an end.")
        } else {
            console.log("You may have lost this battle, but you're still alive! Rally your courage and move forward. You have " + playerTotalHP + " hit points still!")
            toWalk(playerItems);
        }
    };
}


// Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared
//var outcomes = ["No enemies yet! Still walking...", "Lucky you! Keep walking...", "The coast is clear. Continue walking...", 'enemy'];

//var currentOutcome = "Start walking";

function toWalk(playerItems) {
    //The console will ask the user to enter a "w" to walk
    var walk = readline.question("Press 'w' to walk or 'p' to print your info! ");
    if (walk === "w") {
        var outcomes = ["No enemies yet! Still walking...", "Lucky you! Keep walking...", "The coast is clear. Continue walking...", 'enemy'];
        var currentOutcome = "Start walking";
        while (currentOutcome.includes("walking")) {
            console.log(currentOutcome);

            var outcome = Math.floor(Math.random() * 4);

            currentOutcome = outcomes[outcome];
        }
        // If a Wild Enemy appears
        console.log("Found an Enemy!");
        fight();
    } else if (walk === "p") {
        console.log("Player: " + name + " HP: " + playerTotalHP + " Your items: " + playerItems);
        toWalk();
    } else {
        console.log("That isn't an option. Try again!");
        toWalk();
    }
}

// Inventory 
// When the player kills enemies, they are awarded with items
// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
