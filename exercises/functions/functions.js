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

var oddEven = function (num) {
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
    var last = num;
    for (var n = 0; n <= num; n++) {
        var fib = 0;
        var negn = 0 - n;
        var phi = ((1 + Math.sqrt(5)) / 2);
        var negphi = 0 - phi;
        fib = Math.round(((Math.pow(phi, n)) - (Math.pow(negphi, negn))) / Math.sqrt(5));
        console.log(fib);
    }

    //
    //        while (i <= num) {
    //            ((1 + math.pow(phi, n)) - (-math.pow(phi, i))) / ((Math.pow(2, n)) * Math.sqrt(5))
    //        }
    //
    //
    //        phi to the power of n - (-phi to the power of - n)
    //        divided by the sqrt of 5
}

//fibonacci(5);
//fibonacci(10);

function quadratic(a, b, c) {
    var x1 = -b / 2 / a + Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;
    var x2 = -b / 2 / a - Math.pow(Math.pow(b, 2) - 4 * a * c, 0.5) / 2 / a;
    console.log(x1);
    console.log(x2);
    //if (form.x1.value == "NaN") form.x1.value="Imag.!";
    //if (form.x2.value == "NaN") form.x2.value="Imag.!";
}

//quadratic(1, 12, 32);

function findMostFrequent(string) {
    var chars = {},
        first = string.charAt(0);
    chars[first] = 1;
    var maxChar = first,
        maxCount = 1;

    for (var i = 1; i < string.length; i++) {
        var char = string.charAt(i);
        if (chars[char]) {
            chars[char]++;
        } else {
            chars[char] = 1;
        }
        if (chars[char] > maxCount) {
            maxChar = char;
        }
    }
    console.log(maxChar);
}


findMostFrequent("The quick brown fox jumps over the lazy dog");