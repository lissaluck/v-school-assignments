var readline = require("readline-sync");
var firstName = readline.question("What is your first name? ");
var lastName = readline.question("What is your last name? ");
var age = readline.question("How old are you? ");
var faveColor = readline.question("What is your favorite color? ");
var tellMe = readline.question("Tell me a little about yourself. What do you do? What are your favorite hobbies? Anything you want me to know... ");


//console.log(firstName);
//console.log(age);

console.log("1. " + faveColor.toUpperCase() + " is your favorite color!");
console.log("2. Your first name is " + firstName.length + " characters long.")
console.log("3. Your name is " + firstName + " " + lastName);


function lastHalf(str) {
    var inHalf = Math.floor(str.length / 2);

    if (str.length > 20) {
        var outputString = "4. You're very social! The last half of your string is: ";
        for (var i = inHalf; i < str.length; i++) {
            outputString += str[i];
        }
        return outputString;
    } else {
        return ("4. You're not very talkative, are you?");
    }
};

console.log(lastHalf(tellMe));


var startFromN = readline.question("Your string was " + tellMe.length + " characters long! Where do you want to begin your print out? Choose a number from 1 to " + (tellMe.length - 1) + "!  ");

function printFromN(str, startN) {
    var startFromI = (Number(startN) - 1);
    var printString = "5. Here's your print out: ";
    for (var i = startFromI; i < str.length; i ++) {
        printString += str[i];
    }
    return printString;
};

console.log(printFromN(tellMe, startFromN));