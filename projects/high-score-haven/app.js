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
        var checked = $("#trash").prop("checked");
        if (checked) {
            var i = Math.floor(Math.random() * 5);
            var trash = trashTalk[i];
        } else {
            var trash = "";
        }
        var markup = "<tr><td>" + name + "</td><td>" + game + "</td><td>" + score + " " + unitStr + "</td><td>" + date + "</td><td>" + trash + "</td></tr>";
        $("table tbody").append(markup);
    });
});