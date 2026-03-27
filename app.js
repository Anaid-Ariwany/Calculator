let shouldResetDisplay = false;

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
let number1 = "";
let number2 = "";
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


// create functions that update number variables
function updateNumber1(value) {
    number1 += value;
}

function updateNumber2(value) {
    number2 += value;
}

function updateOperator(value) {
    operator = value;
}

/* display each number variable and the operator */
function displayValues() {
    const expression = document.querySelector("#expression");
    expression.textContent = `${number1} ${operator} ${number2}`;
}

/* add event listeners to buttons to update number variables and operator variable when clicked */
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();

        if (!isNaN(value) || value === ".") {

            if (shouldResetDisplay) {
                clearAll();
                shouldResetDisplay = false;
            }

            if (operator === "") {
                updateNumber1(value);
            } else {
                updateNumber2(value);
            }

            displayValues();

        } else if (value === "=") {
            calculateResult();

        } else if (value === "AC") {
            clearAll();

        } else if (value === "⌫") {
            handleBackspace();
        }
        else {
            updateOperator(value);
            displayValues();
        }
    });
});


//function to calculate the result when the equals button is clicked
function calculateResult() {
    const num1 = parseFloat(number1);
    const num2 = parseFloat(number2);

    const result = operate(num1, operator, num2);

    const resultDisplay = document.querySelector("#result");
    resultDisplay.textContent = result;

    shouldResetDisplay = true;
}


//clear function (AC)
function clearAll() {
    number1 = "";
    number2 = "";
    operator = "";

    document.querySelector("#expression").textContent = "";
    document.querySelector("#result").textContent = "";
}

//backspace function
function handleBackspace() {
    if (operator === "") {
        number1 = number1.slice(0, -1);
    } else if (number2 !== "") {
        number2 = number2.slice(0, -1);
    } else {
        operator = "";
    }
    displayValues();
}