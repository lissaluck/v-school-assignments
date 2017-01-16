/* clean copy */
function noDupes(string) {
    string = string.toLowerCase();
    var uniques = "";
    var misfits = "";
    for (var i = 0; i < string.length; i++) {
        if (uniques.indexOf(string[i]) !== -1) {
            misfits += string[i];
        } else {
            uniques += string[i];
        }
    }
    console.log("Uniques: " + uniques);
    console.log("Extras: " + misfits);
    
    var arr = uniques.split("");
    console.log(arr.sort().join(""));
}

noDupes("bookkeeper Larry");
//noDupes("Hello world, welcome to the universe.");

/* Exercise instructions */
//input
//var input = 'bookkeeper larry';

// output
// No duplicates: 'bokepr lay'
// The Misfits: 'okeerr'

/* Where I started */
//
//function removeDupes(str) {
//    var str = str.toLowerCase();
//    var noDupes = "";
//    var dupes = "";
//    for (var i = 0, j = 1; i < str.length; i++, j++) {
//        if (str[i] != str[j]) {
//            noDupes += str[i];
//        } else {
//            dupes += str[j];
//        }
//    }
//    console.log("No duplicates: " + noDupes);
//    console.log("The Misifts: " + dupes);
//}
//
//removeDupes("Melissa Luckett");
//

/* Solution with pseudo code / explanations */
//function noDupes(string) {
//    // lowercase letters
//    string = string.toLowerCase();
/* If you wanted to remove the spaces */
//    string = string.toLowerCase().split(" ").join("");
//    // create an empty string for unique letters
//    var uniques = "";
//    // create an empty string for the misfits (duplicates)
//    var misfits = "";
//    // loop through each letter in the string
//    for (var i = 0; i < string.length; i++) {
//        // check if the current letter is already in the unique letters string
//        if (uniques.indexOf(string[i]) !== -1) {
//            // put it in the duplicates string
//            misfits += string[i];
//        } else {
//        // else
//            uniques += string[i];
//            // put it in the unique letters string
//        }
//    }
//    // console.log uniques and the misfits/duplicates
//    console.log("No duplicates: " + uniques);
//    console.log("The Misifts: " + misfits);
//}
//
//noDupes("Hello world, welcome to the universe.");