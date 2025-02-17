// Basic math functions
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
  if (b === 0) {
    return "Error: Division by 0";
  }
  return a / b;
}

// Operation variables
let num1 = null;
let num2 = null;
let operator = "";
let result = null;

// Operate function
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

// Add event listeners to operator buttons
btnAdd.addEventListener("click", () => {
  if (displayArray.length === 0) return;
  num1 = parseFloat(displayArray.join(""));
  operator = "+";
  displayArray = [];
});

btnSubstract.addEventListener("click", () => {
  if (displayArray.length === 0) return;
  num1 = parseFloat(displayArray.join(""));
  operator = "-";
  displayArray = [];
});

btnMultiply.addEventListener("click", () => {
  if (displayArray.length === 0) return;
  num1 = parseFloat(displayArray.join(""));
  operator = "*";
  displayArray = [];
});

btnDivide.addEventListener("click", () => {
  if (displayArray.length === 0) return;
  num1 = parseFloat(displayArray.join(""));
  operator = "/";
  displayArray = [];
});

// Add event listener to equal button
const btnResult = document.querySelector("#btnResult");
btnResult.addEventListener("click", () => {
  if (displayArray.length === 0 || num1 === null || operator === "") return;
  num2 = parseFloat(displayArray.join(""));
  result = operate(num1, num2, operator);
  if (typeof result === "number" && !Number.isInteger(result)) {
    result = result.toFixed(2); // Round to 2 decimal places
  }
  display.textContent = result;
  displayArray = [result];
  num1 = result;
  num2 = null;
  operator = "";
});

// Add event listener to clear button
const btnClear = document.querySelector("#btnClear");
btnClear.addEventListener("click", () => {
  displayArray = [];
  display.textContent = "0";
  num1 = null;
  num2 = null;
  operator = "";
  result = null;
});
