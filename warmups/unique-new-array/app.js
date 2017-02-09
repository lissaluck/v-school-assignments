function findUniques(array1, array2) {
    var combinedArray = array1.concat(array2);
    var newArray = [];
    for (var i = 0; i < combinedArray.length; i++) {
        var indices = []
        var element = combinedArray[i];
        var idx = combinedArray.indexOf(element);
        while (idx !== -1) {
            indices.push(idx);
            idx = combinedArray.indexOf(element, idx + 1);
        }
        if(indices.length === 1) {
            newArray.push(element);
        }
    } return(newArray);
}

console.log(findUniques([1, 2, 5], [1, 2, 8, 9, 10]));
