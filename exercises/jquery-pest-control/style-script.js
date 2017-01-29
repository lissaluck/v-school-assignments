function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);
}

function initate() {
    var style1 = document.getElementById("stylesheet-peach");
    var style2 = document.getElementById("stylesheet-mario");
    var style3 = document.getElementById("stylesheet-wario");
    var coinAudio = new Audio("sounds/Mario-coin-sound.mp3");

    style1.onclick = function () {
        swapStyleSheet("peach.css");
        coinAudio.play();
    };
    
    style2.onclick = function () {
        swapStyleSheet("mario.css");
        coinAudio.play();
    };
    
    style3.onclick = function () {
        swapStyleSheet("wario.css");
        coinAudio.play();
    };
}

window.onload = initate;