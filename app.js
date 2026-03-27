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

/* calculator operations */
//create 3 variables to hold the numbers and operator
let number1 = 0;
let number2 = 0;
let operator = "";

//function `operate` that takes an operator and 2 numbers and calls the correct function based on the operator
function operate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return add(num1, num2);
        case "-":
            return subtract(num1, num2);
        case "*":
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
        default:
            return "Error: Invalid operator.";
    }
}
