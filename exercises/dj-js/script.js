/* mouse events */
document.getElementById("square").addEventListener("mouseover", function () {
    document.getElementById("square").style.backgroundColor = "blue";
});

document.getElementById("square").addEventListener("mousedown", function () {
    document.getElementById("square").style.backgroundColor = "red";
});

document.getElementById("square").addEventListener("mouseup", function () {
    document.getElementById("square").style.backgroundColor = "yellow";
});

document.getElementById("square").addEventListener("dblclick", function () {
    document.getElementById("square").style.backgroundColor = "green";
});

document.getElementById("square").addEventListener("mouseout", function () {
    document.getElementById("square").style.backgroundColor = "orange";
});

/* letter cllicks */

document.getElementById("blue").addEventListener("click", function () {
    document.getElementById("square").style.backgroundColor = "blue";
});

document.getElementById("red").addEventListener("click", function () {
    document.getElementById("square").style.backgroundColor = "red";
});

document.getElementById("yellow").addEventListener("click", function () {
    document.getElementById("square").style.backgroundColor = "yellow";
});

document.getElementById("green").addEventListener("click", function () {
    document.getElementById("square").style.backgroundColor = "green";
});

document.getElementById("orange").addEventListener("click", function () {
    document.getElementById("square").style.backgroundColor = "orange";
});