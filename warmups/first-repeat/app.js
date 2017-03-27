// Write a JavaScript function to find the first non-repeated character in a given string.
// 2 different solutions

// Solution 1
function firstNoRepeat(string) {
    string = string.toLowerCase();
    for (var i = 0; i < string.length; i++) {
        if (string[i] !== string[i - 1] && string[i] !== string[i + 1])
            return string[i];
    }
    return "ALL REPEATS!!!!!!!!"
}

// Solution 2
//function firstNoRepeat(string) {
//    string = string.toLowerCase();
//    var uniques = '';
//
//    for (var i = 0; i < string.length; i++) {
//        var char = string.charAt(i);
//        if (string.indexOf(char) === string.lastIndexOf(char)) {
//            uniques += char;
//        }
//    }
//    return uniques.charAt(0);
//}

console.log(firstNoRepeat("ggGggGggxkljfvlsjkfg"));
