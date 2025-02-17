//Basic math functions
function add(a, b) {
  return a + b;
}

function substract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

//Operation variables

let num1;
let num2;
let operator = "";
let result;

//Operate function

function operate(a, b, operator) {
  if (operator === "+") {
    return add(a, b);
  } else if (operator === "-") {
    return substract(a, b);
  } else if (operator === "*") {
    return multiply(a, b);
  } else if (operator === "/") {
    return divide(a, b);
  } else {
    return null;
  }
}

// Init number buttons and pass numbers to display function
const buttons = [];
const display = document.querySelector("#display");
let displayArray = [];

for (let i = 0; i <= 9; i++) {
  buttons[i] = document.querySelector(`#btn${i}`);
  buttons[i].addEventListener("click", () => {
    // Avoid multiple zeros at the beginning of the number
    if (displayArray.length === 0 && i === 0) return;
    displayArray.push(i);
    display.textContent = displayArray.join("");
  });
}

// Init operator buttons
const btnAdd = document.querySelector("#btnAdd");
const btnSubstract = document.querySelector("#btnSubstract");
const btnMultiply = document.querySelector("#btnMultiply");
const btnDivide = document.querySelector("#btnDivide");

//
