let num1 = "";
let num2 = "";
let operator = "";
let result = "";


const display = document.getElementById("display");
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
});

function handleButtonClick(e) {
    const clickedButton = e.target.textContent;

    console.log("Button clicked:", clickedButton);

    if (!isNaN(clickedButton)) {

        if (result !== "" && !isNaN(clickedButton) && operator ==="") {
        num1 = clickedButton;
        display.value = num1;
        result = "";
        console.log("num1: ", num1)
        } else if (operator === "") {
            num1 += clickedButton;
            console.log("num1: ", num1);
            display.value = num1;
        } else {
            num2 += clickedButton;
            display.value = num2;
            console.log("num2: ", num2)
        }
    } else if (clickedButton === "+" || clickedButton === "-" || clickedButton === "*" || clickedButton === "/") {
        if (operator !== "" && num1 !== "" && num2 !== "") {
            result = operate(num1, num2, operator);
            console.log("Operate: ", num1, operator, num2, "=", result);
            num1 = result;
            num2 = "";
            operator = clickedButton;
            display.value = result;
            console.log("num1: ", num1)
            console.log("num2: ", num2)
            console.log("operator: ", operator)
        } else if (operator == "") {
            operator = clickedButton;
            console.log("operator:", operator)
        }
    } else if (clickedButton === "=" && num1!== "" && num2 !== "") {
        result = operate(num1, num2, operator);
        console.log("Operate: ", num1, operator, num2, "=", result);
        num1 = result;
        num2 = "";
        operator = "";
        display.value = result;
        console.log("num1: ", num1)
        console.log("num2: ", num2)
        console.log("operator: ", operator)
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

    switch (operator) {
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