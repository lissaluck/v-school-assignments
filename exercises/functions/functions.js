function sum(num1, num2) {
    return (num1 + num2);
}
            
//console.log(sum(2, 3));

function largest(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return num1;
    } else if (num2 > num1 && num2 > num3) {
        return num2;
    } else {
        return num3;
    }
}

//console.log(largest(3, 2, 1));
//console.log(largest(6, 7, 5));
//console.log(largest(8, 9, 10));
//console.log(largest(11, 13, 12));

function oddEven(num) {
    if (num % 2 === 1) {
        return "odd";
    } else {
        return "even";
    }
}

//console.log(oddEven(5));
//console.log(oddEven(12));

function stringOutput(str) {
    var halfString = Math.floor(str.length / 2);
    var outputString = "";
    if (str.length > 20) {
        for (var i = 0; i < halfString; i++) {
            outputString += str[i];
        }
        return outputString;
    } else {
        outputString = str + str;
        return outputString;
    }
};

//console.log(stringOutput("I am a mom."));
//console.log(stringOutput("I am a single mom to two beautiful kids."));

function fibonacci(num) {
    
}

function quadratic(a, b, c) {
    
}

function frequentChar(str) {
    // count the number of times a character occurs
    // compare the counts to find the largest
    
}

function noDupes(str) {
    str = str.toLowerCase();
    var uniques = "";
    var misfits = "";
    for (var i = 0; i < str.length; i++) {
        if (uniques.indexOf(str[i]) !== -1) {
            misfits += str[i];
        } else {
            uniques += str[i];
        }
    }
    console.log("Uniques: " + uniques);
    console.log("Extras: " + misfits);
    
    var arr = uniques.split("");
    console.log(arr.sort().join(""));
}

noDupes("bookkeeper Larry");