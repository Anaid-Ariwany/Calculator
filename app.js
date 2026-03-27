/* calculator functions */
//add function
function add(num1, num2) {
    return num1 + num2;
}

//subtract function
function subtract(num1, num2) {
    return num1 - num2;
}

//multiply function
function multiply(num1, num2) {
    return num1 * num2;
}

//divide function
function divide(num1, num2) {
    if (num2 === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return num1 / num2;
}