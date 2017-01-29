function total($goombas, $bobombs, $cheepcheeps) {
    var $finalTotal = $goombas + $bobombs + $cheepcheeps;
    return $finalTotal;
};

var $goombaPrice = 5;

$("#goomba-price").html($goombaPrice + " Coins");

var $goombasCaught = 12;

$("#goomba-caught").html($goombasCaught);

var $goombaTotal = $goombaPrice * $goombasCaught;

$("#goomba-total").html($goombaTotal + " Coins");


var $bobombPrice = 7;

$("#bobomb-price").html($bobombPrice + " Coins");

var $bobombCaught = 8;

$("#bobomb-caught").html($bobombCaught);

var $bobombTotal = $bobombPrice * $bobombCaught;

$("#bobomb-total").html($bobombTotal + " Coins");


var $cheepCheepPrice = 11;

$("#cheep-cheep-price").html($cheepCheepPrice + " Coins");

var $cheepCheepCaught = 5;

$("#cheep-cheep-caught").html($cheepCheepCaught);

var $cheepCheepTotal = $cheepCheepPrice * $cheepCheepCaught;

$("#cheep-cheep-total").html($cheepCheepTotal + " Coins");

$("#final-total").html("Total for services rendered: " + total($goombaTotal, $bobombTotal, $cheepCheepTotal) + " Coins");