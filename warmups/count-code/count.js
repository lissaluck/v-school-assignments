function countCode(string) {
    var codeCounter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "c" && string[i + 1] === "o" && string[i + 3] === "e") {
            codeCounter++;
        }
    } console.log(codeCounter);
}

// Can this be done with Index??
function countCode(string) {
    count = 0;
    beginningC = (string.indexOf("c"));
//    console.log(beginningC);
    if (string[beginningC + 1] === "o" && string[beginningC + 3] === "e") {
        count++;
    }
}

countCode("aaacodebbb"); // -> 1 
countCode("codexxcode"); // -> 2 
countCode("cozexxcope"); // -> 2
countCode("Melissa"); // -> 0