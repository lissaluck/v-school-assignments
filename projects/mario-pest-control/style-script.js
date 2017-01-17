function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
    var style1 = document.getElementById("stylesheet-peach");
    var style2 = document.getElementById("stylesheet-mario");

    style1.onclick = function () {
        swapStyleSheet("peach.css")
    };
    
    style2.onclick = function () {
        swapStyleSheet("mario.css")
    };
}

window.onload = initate;