let result = document.getElementById('result');

function insertValue(value) {
  result.value += value;
}

function clearScreen() {
  result.value = '';
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    alert('Invalid Expression!');
  }
}
