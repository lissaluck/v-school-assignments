document.getElementById("submitForm").addEventListener("click", function () {
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var customerName = firstName + " " + lastName;
    var age = document.getElementById('age').value;

    var destination = document.getElementById('destination');
    var strDest = destination.options[destination.selectedIndex].value;

    var genders = document.getElementsByName("gender");

    for (var i = 0; i < genders.length; i++) {
        if (genders[i].checked == true) {
            var selectedGender = genders[i].value;
        }
    }

    var checked = document.querySelectorAll("input[name=dietaryRestrictions]:checked");
    var dietary = [];
    for (var i = 0; i < checked.length; i++) {
        dietary.push(checked[i].value);
    }
    alert("Customer name: " + customerName +
        "\nAge: " + age +
          "\nGender: " + selectedGender +
        "\nDestination: " + strDest +
        "\nDietary Restrictions: " + dietary);

});