//function add(num1, num2) {
//    return num1 + num2;
//}
//
//function subtract(num1, num2) {
//    return num1 - num2;
//}
//
//function multiply(num1, num2) {
//    return num1 * num2;
//}
//
//Number("30");
//parseInt("30");
//parseFloat("3.14");

/* From Eric */
//javascript
//long broken down into bite sized peices (better)

var addSubmit = document.getElementById("submit-add");

addSubmit.addEventListener("click", function(){
    var value1 = document.getElementById("add-input-1").value;
    var value2 = document.getElementById("add-input-2").value;
    
    value1 = parseInt(value1);
    value2 = parseInt(value2);
    
    var total = value1 + value2;
    
    var output = document.getElementById("add-output");
    
    output.textContent = total;
})

//
////less lines. Annoying, but fun
//
//document.getElementById("submit-add").addEventListener("click", function(){
//    document.getElementById("add-output").textContent = parseInt(document.getElementById("add-input-1").value) + parseInt(document.getElementById("add-input-2").value);
//})