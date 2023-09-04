let num1 = "";
let num2 = "";
let operator = "";
let result = "";

const display = document.getElementById("display");

const buttons = document.querySelectorAll("#buttons button");

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(e) {
    const clickedButton = e.target.textContent;
    display.value = 0;

    if (!isNaN(clickedButton)) {
        if (operator === "") {
            num1 += clickedButton;
            display.value = num1;
        } else {
            num2 += clickedButton;
            display.value = num2;
        }
    } else if (clickedButton === "+" || clickedButton === "-" || clickedButton === "*" || clickedButton === "/") {
        operator = clickedButton;
    } else if (clickedButton === "=") {
        console.log(operate(num1,num2,operator));
        display.value = operate(num1,num2,operator);
    } else if (clickedButton === "clear") {
        num1 = "",
        num2 = "";
        operator = "";
        display.value = 0;
    }
    
}

function operate(num1, num2, operator) {
    num1 = Number(num1)
    num2 = Number(num2)

    switch(operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
    }
}