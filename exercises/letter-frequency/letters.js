var letterFreq = function (string) {
    var freqChart = {};
    var array = [];
    for (var i = 0; i < string.length; i++) {
        if (!freqChart.hasOwnProperty(string[i])) {
            array.push(string[i]);
            freqChart[string[i]] = 1;
        } else {
            freqChart[string[i]] += 1;
        }

    }
    console.log(freqChart);
}

letterFreq("slimy smelly solution");
letterFreq("Hello world!");