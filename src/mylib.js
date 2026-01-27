// Caculator program for basic arithmetic functions

// function to check if input is a number
function isNumber(n) {
  if (typeof n !== "number") {
    throw new Error("Inputs must be numbers");
  }
}

function add(a, b) {
  isNumber(a);
  isNumber(b);
  return a + b;
}

function subtract(a, b) {
  isNumber(a);
  isNumber(b);
  return a - b;
}

function multiply(a, b) {
  isNumber(a);
  isNumber(b);
  return a * b;
}

function divide(a, b) {
  isNumber(a);
  isNumber(b);
  if (b === 0) {
    throw new Error("ZeroDivision");
  }
  return a / b;
}

function isEven(n) {
  isNumber(n);
  return n % 2 === 0;
}

module.exports = { add, subtract, multiply, divide, isEven };
