/******   @oreolnoumodong@outlook.com    ************/

/**checking function */

function displayResult() {

    var firstNumber = document.getElementById("firstNumber");
    var secondNumber = document.getElementById("secondNumber");
    var finalResult = document.getElementById("finalResult");
    var operation = document.getElementById("operation");

    var valueOne = firstNumber.value;
    var valueTwo = secondNumber.value;
    var opera = operation.value;

    if (valueOne != "" && valueTwo != "") {

        if (parseInt(valueTwo) != 0 || opera != "division") {

            // Called calculated() function

            if (!isNaN(calculated(valueOne, valueTwo, opera))) {
                finalResult.innerHTML = calculated(valueOne, valueTwo, opera);
            } else {
                showPopop("There must be an error with the values entered. Please check and try again. ");
            }
        } else {
            showPopop("We cannot divide a number by zero. ");
        }

    } else {
        showPopop("You have one or two empty fields. Please check and try again. ");
    }


}

/** cacul function */

function calculated(firstValue, seconvalue, opera) {
    if (opera == "plus") {
        return parseFloat(firstValue) + parseFloat(seconvalue);
    } else if (opera == "moins") {
        return parseFloat(firstValue) - parseFloat(seconvalue);
    } else if (opera == "multiplication") {
        return parseFloat(firstValue) * parseFloat(seconvalue);
    } else {
        return parseFloat(firstValue) / parseFloat(seconvalue);
    }
}