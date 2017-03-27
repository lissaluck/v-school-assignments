function formatMoney(input) {
    return `$${(input/100).toLocaleString(undefined, {minimumFractionDigits: 2})}`
}

console.log(formatMoney(123456789));

//function reverseString(str) {
//    return str.split("").reverse().join("");
//}
//
//
//function formatMoney(money) {
//    var moneyString = money.toString();
////    var revString = reverseString(moneyString);
////    console.log(revString);
//    var newString= "";
//    for (i = moneyString.length; i = 0 ; i--) {
//        newString += moneyString[i];
//    }
//    console.log(newString);
//} 
//
//formatMoney(123456789);




// Steven's solution
//
//function moneyFormat(number) {
//    formated = [];
//    number = number.toString().split("").reverse();
//    while (number.length < 3) {
//        number.push("0");
//    }
//    for (var i = 0; i <= number.length; i++) {
//        if (i === number.length) {
//            if (formated[0] === ",") {
//                formated[0] = "$";
//            } else {
//                formated.unshift("$");
//            }
//            return formated.join("");
//        } else if (i < 1) {
//            formated.unshift(".", number[i + 1], number[i]);
//            i++
//        } else if (i === number.length - 3) {
//            if (i === number.length - 1) {
//                formated.unshift(number[i]);
//            } else if (i === number.length - 2) {
//                formated.unshift(number[i + 1], number[i]);
//                i++;
//            } else {
//                formated.unshift(number[i + 2], number[i + 1], number[i]);
//                i += 2;
//            }
//        } else {
//            formated.unshift(",", number[i + 2], number[i + 1], number[i]);
//        }
//    }
//}
//
//var number = 92355715938;
//var number2 = 23;
//var number3 = 10;
//var number4 = 34567;
//
//console.log(moneyFormat(number));
//console.log(moneyFormat(number2));
//console.log(moneyFormat(number3));
//console.log(moneyFormat(number4));
//


// Daniel's solution
//
//function formatMoney(num) {
//    var n = num.toString();
//    var array = n.split("");
//    var emptyArray = [];
//    emptyArray.push("$");
//    for (var i = 0; i < array.length - 2; i++) {
//        if ((array.length - 2) % 3 === 1) {
//            if (i === 0) {
//                emptyArray.push(array[i]);
//                emptyArray.push(",");
//            } else if (i % 3 === 0 && i !== array.length - 3) {
//                emptyArray.push(array[i]);
//                emptyArray.push(",");
//            } else {
//                emptyArray.push(array[i]);
//            }
//        }
//        if ((array.length - 2) % 3 === 2) {
//            if (i === 1) {
//                emptyArray.push(array[i]);
//                emptyArray.push(",");
//            } else if (i % 3 === 1 && i !== array.length - 3) {
//                emptyArray.push(array[i]);
//                emptyArray.push(",");
//            } else {
//                emptyArray.push(array[i]);
//            }
//        }
//        if ((array.length - 2) % 3 === 0) {
//            if (i % 3 === 2 && i !== array.length - 3) {
//                emptyArray.push(array[i]);
//                emptyArray.push(",");
//            } else {
//                emptyArray.push(array[i]);
//            }
//        }
//    }
//    emptyArray.push(".");
//    emptyArray.push(array[array.length - 2])
//    emptyArray.push(array[array.length - 1]);
//    console.log(emptyArray.join(""));
//}
//
// Daniel comment
//if (array.length === 1) {
//            array.push("0");
//            array.push(array[0]);
//        }
