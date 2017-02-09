function camelCase(string) {
    var newString = "";
    for (i = 0; i < string.length; i++) {
        if (string[i] === " " || string[i] === "-" || string[i] === "_") {
            newString += string[i+1].toUpperCase();
            i++;
        } else {
            newString = newString + string[i];
        }
    }
    return(newString);
}

console.log(camelCase("happy day"));
console.log(camelCase("happy-day"));
console.log(camelCase("happy_day"));