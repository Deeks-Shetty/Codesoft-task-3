let display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let previousInput = '';

function clearDisplay() {
  currentInput = '0';
  operator = null;
  previousInput = '';
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1) || '0';
  updateDisplay();
}

function appendNumber(number) {
  if (currentInput === '0' && number !== '.') {
    currentInput = number;
  } else {
    currentInput += number;
  }
  updateDisplay();
}

function appendOperator(op) {
  if (operator !== null) {
    calculate();
  }
  previousInput = currentInput;
  operator = op;
  currentInput = '0';
}

function calculate() {
  if (operator === null || previousInput === '') return;
  let result;
  const prev = parseFloat(previousInput);
  const curr = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = prev + curr;
      break;
    case '-':
      result = prev - curr;
      break;
    case '*':
      result = prev * curr;
      break;
    case '/':
      result = curr !== 0 ? prev / curr : 'Error';
      break;
    default:
      return;
  }

  currentInput = result.toString();
  operator = null;
  previousInput = '';
  updateDisplay();
}

function updateDisplay() {
  display.textContent = currentInput;
}
