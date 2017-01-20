function antiCaps(word) {
    var newWord = ""
    for (i = 0; i < word.length; i++) {
        if (isCaps(word[i])) {
            newWord += word[i].toLowerCase();
        } else {
            newWord += word[i].toUpperCase();
        }
    }
    console.log(newWord);
}

function isCaps(letter) {
    return letter === letter.toUpperCase();
}

antiCaps('Hello') // hELLO  
antiCaps('racEcar') // RACeCAR  
antiCaps('bAnAnA') // BaNaNa