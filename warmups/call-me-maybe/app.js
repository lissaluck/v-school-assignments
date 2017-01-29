var names = ["Bruce", "Gail", "Eric", "Bryceton", "Ella", "MaryKay", "Sharon", "Debbie", "Mikey", "Andrea"];

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, sendText);
}

function attemptCall(name, dontCall, call, sendText) {
    nameLower = name.toLowerCase();
    // If there is more than one "a" in the name
    if (nameLower.lastIndexOf("a") !== nameLower.indexOf("a")) {
        sendText(name);
    } else if (nameLower.length % 2 !== 0) {
        dontCall(name); 
    } else {
        call(name);
    }
}

function sendText(name) {
    console.log(`Sent a text to ${name}`);
}

function dontCall(name) {
    console.log(`Didn't call ${name}`);
}

function call(name) {
    console.log(`Called ${name}`);
}

// execute function attemptCall for each name in array

//attemptCall(name cb1, cb2, cb3) // could be this because I choose the name of parameter

// these are the exercise parameter names
//attemptCall(name, dontCallm call, sendText)
// if name has more than one 'a'
// sendText();
// else if name.length is odd
// dontCall()
//else length is even
// call();