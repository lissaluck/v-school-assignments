var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];

/* with join method */
//function printArray(lyricArray) {
//    console.log(lyricArray.join(" "));
//}

function printArray(lyricArray) {
    var lyricString = "";
    for (var i = 0; i < lyricArray.length ; i++) {
        lyricString += lyricArray[i] + " ";
    }
    console.log(lyricString);
}

printArray(lyrics);

//function reversePrint(lyricArray) {
//    lyricArray.reverse();
//    console.log(lyricArray.join(" "));
//}
//
//reversePrint(lyrics);

function reversePrint(lyricArray) {
    var lyricString = "";
    for (var i = lyrics.length - 1; i >= 0; i--) {
        lyricString += lyricArray[i] + " ";
    }
    console.log(lyricString);
}

reversePrint(lyrics);

function printEvens(lyricArray) {
    var lyricString = "";
    for (var i = 0; i <lyrics.length - 1; i += 2) {
        lyricString += lyricArray[i] + " ";
    }
    console.log(lyricString);
}

printEvens(lyrics);