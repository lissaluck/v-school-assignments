function isPalindrome(phrase) {
    phrase = phrase.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\"'\.\?" "]/g, "");
//    console.log(phrase);

    for (var i = 0, j = phrase.length - 1; i < j; i++, j--) {
        if (phrase[i] !== phrase[j]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("Star Rats!"));
console.log(isPalindrome("palindrome"));
console.log(isPalindrome("eye"));
console.log(isPalindrome("Go hang a salami, I'm a lasagna hog"));
console.log(isPalindrome("Do good? I? No! Evil anon I deliver. I maim nine more hero-men in Saginaw, sanitary sword a-tuck, Carol, I- Lo! - rack, cut a drowsy rat in Aswan. I gas nine more hero-men in Miami. Reviled, I (Nona) live on. I do, O God!"));