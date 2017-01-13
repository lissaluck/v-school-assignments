/*
function outputString(inputString) {
    for (var i = 0; i <= inputString.length; i++) {
        console.log(inputString[i]);
    }
}

outputString("Melissa");
*/


function findLetter(str, char) {
    for (var i = 0; i <= str.length; i++) {
        if (str[i] === char) {
            console.log(char + " is in " + str + " at index " + (str.indexOf(char)));
            break;
        } else if (i === str.length) {
            console.log(char + " was not found in " + str);
        }
    }
}


findLetter("Melissa", "a");



function findNumber(numberArray) {
    for (var i = 0; i <= numberArray.length; i++) {
        if (numberArray[i] === 42) {
            console.log[i];
            break;
        } else if (i === numberArray.length) {
            console.log("42 was not found");
        }
    }
}

findNumber([1, 2, 3, 4, 5, 42, 43, 56])

function lowest(arrayTen) {
    var lowest = arrayTen[0];
    for (var i = 1; i < arrayTen.length; i++) {
        if (arrayTen[i] < lowest) {
            lowest = arrayTen[i]
        }
    }
    return lowest;
}

console.log(lowest([-1, 7, 2,3,5,42, 3425, 4, 5,6, 10]));
