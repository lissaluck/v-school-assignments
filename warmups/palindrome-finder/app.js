function isPalindrome(phrase) {
    phrase = phrase.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()" "]/g, "");
    console.log(phrase);
    phrase = phrase.toLowerCase;

    for (var i = 0, j = phrase.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("Star Rats!"));
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("eye"));


//function isPalindrome(string) {
//    string = string.toLowerCase().replace(/[^a-z]/g, "");
//    for (var i = 0, j = string.length - 1; i < j; i++, j--) {
//        if (string[i] !== string[j]) {
//            return false;
//        }
//    }
//    return true;
//}
//
////var string = "I madam, I made radio! So I dared! Am I mad?? Am I?!";
//var string = "Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I- Lo! - rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!"
//
//console.log(isPalindrome(string));