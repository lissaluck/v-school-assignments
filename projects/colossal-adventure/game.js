var readline = require('readline-sync');
// Console must greet player with a fun message
var greeting = readline.keyIn("Hello, player! Press any key to begin.")

//Console must ask for the player's name and store it
var name = readline.question('What name do you wish to be known by? ');

console.log("Hello, " + name + "! Prepare to fight!!");
var playerHP = 1000;

//The console will ask the user to enter a "w" to walk
var walk = readline.question("Press 'w' to walk! " );

/* "max" is inclusive */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Every time the player walks, a random algorithm will be run that determines
//if a wild enemy has appeared(A 1 / 3 or 1 / 4 chance of being attacked)
var walking = getRandomInt(1, 4);

if (walk === "w") {
//    console.log("You're walking!");
    if (walking === 1) {
        readline.keyIn("The coast is clear! Press 'w' to walk again.");
    } else if (walking === 2) {
        console.log("Number 1");
    } else if (walking === 3) {
        console.log("Number 2");
    } else {
        console.log("Number 3");
    }

} else {
    console.log("That is not a valid option!")
}

//
////Enemy generation
//function determineType() {
//    var type = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
//    if (type === 1) {
//        return "Ancient Dragon";
//    } else if (type === 2) {
//        return "Prowler";
//    } else if (type === 3) {
//        return "Mighty Grunt";
//    }
//}
//
//function determineHitPoints(type) {
//    if (type === "Ancient Dragon") {
//        return Math.floor(Math.random() * (100 - 80 + 1)) + 80;
//    } else if (type === "Prowler") {
//        return Math.floor(Math.random() * (79 - 50 + 1)) + 50;
//    } else if (type === "Mighty Grunt") {
//        return Math.floor(Math.random() * (49 - 20 + 1)) + 20;
//    }
//}
//
//function determineItem(type) {
//    if (type === "Ancient Dragon") {
//        return item = "dragon scale";
//    } else if (type === "Prowler") {
//        return item= "prowler tooth";
//    } else if (type === "Mighty Grunt") {
//        return item = "grunt wing";
//    }
//
//}
//
//function Enemy() {
//    this.type = determineType();
//    this.hitPoints = determineHitPoints(this.type);
//    this.defense = this.hitPoints * 3;
//    this.item = determineItem(this.type);
//}

//console.log(Enemy());
//
//// Inventory 
//// When the player kills enemies, they are awarded with items
//// If the user enters 'Print' in the console, the console will print the players name, HP, and each item in their inventory
//
//var inventory = [];
////if (userEnters = "Print") {
////    console.log(name, playerHP, inventory);
////}
//console.log(inventory);