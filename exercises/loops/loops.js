console.log("\n ** Output letters of a string individually **");

function letters(string) {
    for (var i = 0; i < string.length; i ++) {
        console.log(string[i]);
    }
}

letters("Melissa");

console.log("\n ** Find the position of a letter in a string. If the letter isn't found, tell the user so. **");

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
findLetter("Melissa", "t");

console.log("\n ** Find the number 42 within an array. If the number 42 is not found, tell the user. **");

function findNumber(numberArray) {
    for (var i = 0; i < numberArray.length; i++) {
        if (numberArray[i] === 42) {
            console.log("42 is at index " + i);
            return;
        }
    }
    console.log("42 was not found");
}

findNumber([1, 2, 3, 4, 5, 42, 43, 56]);
findNumber([1, 2, 3, 4, 5, 43, 56]);

console.log("\n ** Accepts ten numbers in an array and prints out the smallest. **")

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
