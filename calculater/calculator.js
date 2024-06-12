let theresult = document.getElementById("theresult");
let buttons = document.querySelectorAll("input[type=button]");
let operators = ["+", "-", "*", "/"];
let currentInput = "";
let currentOperator = "";
let previousInput = "";
let resultDisplayed = false;

buttons.forEach((button) => {
  button.addEventListener("click", () => handleButtonClick(button.value));
});

function handleButtonClick(value) {
  if (value === "C") {
    clearDisplay();
  } else if (value === "=") {
    calculate();
  } else if (operators.includes(value)) {
    handleOperator(value);
  } else {
    handleNumber(value);
  }
}

function handleNumber(value) {
  if (resultDisplayed) {
    clearDisplay();
    resultDisplayed = false;
  }
  currentInput += value;
  updateDisplay(currentInput);
}

function handleOperator(value) {
  if (currentInput === "" && previousInput === "") {
    return;
  }
  if (currentInput !== "") {
    if (previousInput !== "") {
      calculate();
    } else {
      previousInput = currentInput;
      currentInput = "";
    }
  }
  currentOperator = value;
}

function calculate() {
  if (currentInput === "" || previousInput === "") {
    return;
  }
  let result;
  let prev = parseFloat(previousInput);
  let curr = parseFloat(currentInput);
  switch (currentOperator) {
    case "+":
      result = prev + curr;
      break;
    case "-":
      result = prev - curr;
      break;
    case "*":
      result = prev * curr;
      break;
    case "/":
      result = prev / curr;
      break;
  }
  updateDisplay(result);
  previousInput = result.toString();
  currentInput = "";
  resultDisplayed = true;
}

function clearDisplay() {
  currentInput = "";
  previousInput = "";
  currentOperator = "";
  theresult.value = "";
}

function updateDisplay(value) {
  theresult.value = value;
}
