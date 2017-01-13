function lower(num1, num2) {
    if (num1 < num2) {
        console.log("num1 is the lowest number: " + num1);
    } else if (num2 < num1) {
        console.log("num2 is the lowest number: " + num2);
    } else {
        console.log("These numbers are equal")
    }
}

lower(20, 34);

function monkeyTrouble(aSmile, bSmile) {
    if (aSmile === bSmile) {
        return true;
    } else {
        return false;
    }
}

function monkeyTrouble2(aSmile, bSmile) {
    return aSmile === bSmile;
}

monkeyTrouble(false, false);
monkeyTrouble2(true, true);

var date = new Date();
var hour = date.getHours();

function greeting() {
    if (hour < 12) {
        console.log("Good morning!");
    } else if (hour >= 12 && hour < 17) {
        console.log("Good afternoon!");
    } else {
        console.log("Good night!");
    }
}

greeting();