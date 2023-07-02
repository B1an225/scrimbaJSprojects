
let num1 = 0;
let num2 = 0;

num1El=document.getElementById("num1-el");
num2El=document.getElementById("num2-el");

function appendNumber(number) {
  if (num1 === 0 || num1=== "") {
    num1 = number;
    num1El.textContent = num1;
  } else {
    num2 = number;
    num2El.textContent = num2;
  }
}
console.log("num1" + num1);
console.log("num2" + num2);

let sumEl = document.getElementById("sum-el")

function add() {
    let result = num1 + num2
    sumEl.textContent = "Sum: " + result
}

function subtract() {
    let result = num1 - num2
    sumEl.textContent = "Sum: " + result
}

function divide() {
    let result = num1 / num2
    sumEl.textContent = "Sum: " + result
}

function multiply() {
    let result = num1 * num2
    sumEl.textContent = "Sum: " + result
}

function clearCalculator() {
  num1 = "";
  num2 = "";
  num1El.textContent = "";
  num2El.textContent = "";
  sumEl.textContent = "Sum: ";
}