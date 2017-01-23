var lyrics = ["This", "hit", "that", "ice", "cold", "Michelle", "Pfeiffer", "that", "white", "gold", "This", "one", "for", "them", "hood", "girls", "Them", "good", "girls", "straight", "masterpieces", "Stylin'", "whilen'", "livin'", "it", "up", "in", "the", "city", "Got", "Chucks", "on", "with", "Saint", "Laurent", "Gotta", "kiss", "myself", "I'm", "so", "pretty"];

/* with join method */
// function printArray(lyricsArray) {
//     console.log(lyricsArray.join(" "));
// }

function printArray(lyricsArray) {
    var lyricsString = "";
    for (var i = 0; i < lyricsArray.length ; i++) {
        lyricsString += lyricsArray[i] + " ";
    }
    console.log(lyricsString);
}

printArray(lyrics);

/* with join method */
//function reversePrint(lyricsArray) {
//    console.log(lyricsArray.reverse().join(" "));
//}
//
//reversePrint(lyrics);

function reversePrint(lyricsArray) {
    var lyricsString = "";
    for (var i = lyrics.length - 1; i >= 0; i--) {
        lyricsString += lyricsArray[i] + " ";
    }
    console.log(lyricsString);
}

reversePrint(lyrics);

function printEvens(lyricsArray) {
    var lyricsString = "";
    for (var i = 0; i < lyrics.length; i += 2) {
        lyricsString += lyricsArray[i] + " ";
    }
    console.log(lyricsString);
}

printEvens(lyrics);


function jumbleArray(lyricsArray) {
    var lyricsString = "";
    if (lyricsArray.length % 2 === 0) {
        for (var i = 0, j = 1; i < lyricsArray.length; i += 2, j += 2) {
            lyricsString += lyricsArray[j] + " " + lyricsArray[i] + " ";
        }
    } else {
        console.log("Lyris are odd");
        for (var i = 0, j = 1; i < lyricsArray.length - 1; i += 2, j += 2) {
            lyricsString += lyricsArray[j] + " " + lyricsArray[i] + " ";
        }
        lyricsString += lyricsArray[lyricsArray.length - 1];
    }
    console.log(lyricsString);
}

jumbleArray(lyrics);
