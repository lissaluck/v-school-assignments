var goombaPrice = 5;

document.getElementById("goomba-price").textContent = goombaPrice + " Coins";

var goombasCaught = 12;

document.getElementById("goomba-caught").textContent = goombasCaught;

var goombaTotal = goombaPrice * goombasCaught;

document.getElementById("goomba-total").textContent = goombaTotal + " Coins";


var bobombPrice = 7;

document.getElementById("bobomb-price").textContent = bobombPrice + " Coins";

var bobombCaught = 8;

document.getElementById("bobomb-caught").textContent = bobombCaught;

var bobombTotal = bobombPrice * bobombCaught;

document.getElementById("bobomb-total").textContent = bobombTotal + " Coins";


var cheepCheepPrice = 11;

document.getElementById("cheep-cheep-price").textContent = cheepCheepPrice + " Coins";

var cheepCheepCaught = 5;

document.getElementById("cheep-cheep-caught").textContent = cheepCheepCaught;

var cheepCheepTotal = cheepCheepPrice * cheepCheepCaught;

document.getElementById("cheep-cheep-total").textContent = cheepCheepTotal + " Coins";

function total(goombas, bobombs, cheepcheeps) {
    var finalTotal = goombas + bobombs + cheepcheeps;
    return finalTotal;
}

document.getElementById("final-total").textContent = "Total for services rendered: " + total(goombaTotal, bobombTotal, cheepCheepTotal) + " Coins";