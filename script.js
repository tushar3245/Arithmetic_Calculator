


function add() {
  calculate('+');
}

function subtract() {
  calculate('-');
}

function multiply() {
  calculate('*');
}

function divide() {
  calculate('/');
}

function reset() {
  document.getElementById("calculatorForm").reset();
  document.getElementById("result").textContent = "";
}

function calculate(operator) {
  // Get user input
  let firstNumber = parseFloat(document.getElementById("firstNumber").value);
  let secondNumber = parseFloat(document.getElementById("secondNumber").value);

  // Perform operation
  let result;
  switch(operator) {
    case '+':
      result = firstNumber + secondNumber;
      break;
    case '-':
      result = firstNumber - secondNumber;
      break;
    case '*':
      result = firstNumber * secondNumber;
      break;
    case '/':
      result = firstNumber / secondNumber;
      break;
    default:
      result = "Invalid operator";
  }

  // Display result
  document.getElementById("result").textContent = `Result: ${result}`;
}

