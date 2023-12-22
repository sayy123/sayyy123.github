let displayValue = '';

function addToDisplay(value) {
  displayValue += value;
  updateDisplay();
}

function addOperator(operator) {
  displayValue += operator;
  updateDisplay();
}

function addDecimal() {
  if (!displayValue.includes('.')) {
    displayValue += '.';
    updateDisplay();
  }
}

function updateDisplay() {
  const display = document.getElementById('display');
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  updateDisplay();
}

function backspace() {
  displayValue = displayValue.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = 'Error';
    updateDisplay();
  }
}