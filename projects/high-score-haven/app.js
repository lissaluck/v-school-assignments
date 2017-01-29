var trashTalk = ["I donate blood every day, but it's not all mine.",
"Did you hear a bell ring? Because someone just got schooled.",
"I'm rubber you're glue.",
"Let me just get you a menu, because you're about to get served.",
"You are the reason they put instructions on shampoo."];


$(function () {
    $("#datepicker").datepicker({
        changeMonth: true,
        changeYear: true
    });
});

$(document).ready(function () {
    $(".add-row").click(function () {
        var name = $("#name").val();
        var game = $("#game").val();
        var date = $("#datepicker").val();
        var score = $("#score").val();
        var unit = document.getElementById('unit');
        var unitStr = unit.options[unit.selectedIndex].value;
        var checked = $("input[name=trash]:checked");
        if (checked) {
            var i = Math.floor(Math.random() * 6);
            var trash = trashTalk[i];
        }
        var dietary = [];
        for (var i = 0; i < checked.length; i++) {
            dietary.push(checked[i].value);
        }
        var markup = "<tr><td>" + name + "</td><td>" + game + "</td><td>" + score + " " + unitStr + "</td><td>" + date + "</td><td>" + trash + "</td></tr>";
        $("table tbody").append(markup);
    });
});




function toWalk(playerItems) {
    //The console will ask the user to enter a "w" to walk
    var walk = readline.question("Press 'w' to walk or 'p' to print your info! ");
    if (walk === "w") {
        var outcomes = ["No enemies yet! Still walking...", "Lucky you! Keep walking...", "The coast is clear. Continue walking...", 'enemy'];
        var currentOutcome = "Start walking";
        while (currentOutcome.includes("walking")) {
            console.log(currentOutcome);

            var outcome = Math.floor(Math.random() * 4);

            currentOutcome = outcomes[outcome];
        }
        // If a Wild Enemy appears
        console.log("Found an Enemy!");
        fight();
    } else if (walk === "p") {
        console.log("Player: " + name + " HP: " + playerTotalHP + " Your items: " + playerItems);
        toWalk();
    } else {
        console.log("That isn't an option. Try again!");
        toWalk();
    }
}