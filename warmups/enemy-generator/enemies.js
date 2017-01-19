var enemies = [];

/*********** HELPER FUNCTIONS ***********/
function determineType() {
    var type = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
    if (type === 1) {
        return "Ancient Dragon";
    } else if (type === 2) {
        return "Prowler";
    } else if (type === 3) {
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


/********* CONSTRUCTOR FUNCTION *********/
function Enemy() {
    this.type = determineType();
    this.hitPoints = determineHitPoints(this.type);
    this.defense = this.hitPoints * 3;
}

/***********  MAIN FUCTION *************/
function generateEnemies(howMany) {
    for(i = 0; i < howMany; i++) {
        var enemy = new Enemy();
        enemies.push(enemy);
    }
}

generateEnemies(100);

console.log(enemies);


// Pseudo code

// Empty array for all enemies

// Create a constructor to generate enemy objects
    // type - randomly chosen between "Ancient Dragon" , "Prowler", and "Mighty Grunt"
    // hit points - depends on the type from above (this.type)
    // defense - hit points * 3

///* "max" is inclusive */
//function get RandomInt(min, max) {
//    Math.floor(Math.random() * (max - min + 1)) + min;
//}
//function determineType() {
//    var enemyTypes["Ancient Dragon", "Prowler", "Mighty Grunt"]
//    var rand = getRandomInt(0, 2)
//    return enemyTypes[rand];
//}
//
//function determineHitPoints(type) {
//    if (type === "Ancient Dragon") {
//        // One way to call and assign
//        var hitPoints = getRandomInt(100, 80);
//        return hitPoints;
//    } else if (type === "Prowler") {
//        // A second way to call and assign
//        return hitPoints = getRandomInt(79, 50);
//    } else if (type === "Mighty Grunt") {
//        return hitPoints = getRandomInt(49, 20);
//    }
//};