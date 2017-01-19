var form = document.getElementById("calculator");

document.getElementById("add-button").addEventListener("click", function () {
    var value1 = form.elements["first-add"].value;
    var value2 = form.elements["second-add"].value;

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    var total = value1 + value2;
    
    form.elements["add-result"].value = total;
});

document.getElementById("subtract-button").addEventListener("click", function () {
    var value1 = form.elements["first-subtract"].value;
    var value2 = form.elements["second-subtract"].value;

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    var total = value1 - value2;
    
    form.elements["subtract-result"].value = total;
});

document.getElementById("multiply-button").addEventListener("click", function () {
    var value1 = form.elements["first-multiply"].value;
    var value2 = form.elements["second-multiply"].value;

    value1 = parseInt(value1);
    value2 = parseInt(value2);

    var total = value1 * value2;
    
    form.elements["multiply-result"].value = total;
});