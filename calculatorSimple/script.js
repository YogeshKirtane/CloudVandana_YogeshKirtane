let currentDisplay = '';

function appendCharacter(character) {
  currentDisplay += character;
  document.getElementById('display').value = currentDisplay;
}

function backspace() {
  currentDisplay = currentDisplay.slice(0, -1);
  document.getElementById('display').value = currentDisplay;
}

function calculateResult() {
  try {
    const expression = currentDisplay.replace('%', '/100*');
    const result = eval(expression);
    document.getElementById('display').value = result;
    currentDisplay = result.toString();
  } catch (error) {
    document.getElementById('display').value = 'Error';
    currentDisplay = '';
  }
}

function clearDisplay() {
  currentDisplay = '';
  document.getElementById('display').value = '';
}
