function countCode(string) {
    var codeCounter = 0;
    for (var i = 0; i < string.length; i++) {
        if (string[i] === "c" && string[i + 1] === "o" && string[i + 3] === "e") {
            codeCounter++;
        }
    } console.log(codeCounter);
}

countCode("aaacodebbb"); // -> 1 
countCode("codexxcode"); // -> 2 
countCode("cozexxcope"); // -> 2
countCode("Melissa"); // -> 0