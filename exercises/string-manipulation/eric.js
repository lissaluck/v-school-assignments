var readline = require("readline-sync");

var lastHalfString = readline.question("type more than twenty letters: ");

function lastHalf(str){
    

    var inHalf = Math.floor(str.length/2);

    if (str.length > 20){

        var ourNewWord = "";
        for (var i = inHalf; i < str.length; i++){
            ourNewWord = ourNewWord + str[i];
        }  
        return(ourNewWord); 
    } else {
        return("you're not very talkative");
    }
}

console.log(lastHalf(lastHalfString));