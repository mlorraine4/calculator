
var displayTop = document.getElementById('displayTop');
var displayBottom = document.getElementById('displayBottom');
var numberBtns = document.querySelectorAll('.btn');
var operatorBtns = document.querySelectorAll('.operator');
var equalButton = document.getElementById('equals');
var clearButton = document.getElementById('clear');

var firstOperand = '';
var secondOperand = '';
var entries = '';
var operator = '';

var operatorClicked = false;

function operate() {

  numberBtns.forEach(numberBtn => {
    numberBtn.addEventListener('click', () => {
      entries += numberBtn.innerText;
      displayBottom.innerText = entries;
    });
  });

  operatorBtns.forEach(operatorBtn => {
    operatorBtn.addEventListener('click', () => {
      if (operatorClicked === false) {
        entries += operatorBtn.innerText;
        operator = operatorBtn.innerText;
        operatorClicked = true;

      } else {
        solve();
        operator = operatorBtn.innerText;
        entries = answer + operator;
      }
    });
  });

  equalButton.addEventListener('click', () => {
    solve();
  });

  clearButton.addEventListener('click', () => {
    clearAll();
  });
}

function solve() {
firstOperand = entries.split(operator)[0];
secondOperand = entries.split(operator)[1];

  if (operator === '+')
    answer = Number(firstOperand) + Number(secondOperand);
  if (operator === '-')
    answer = Number(firstOperand) - Number(secondOperand);
  if (operator === '*')
    answer = Number(firstOperand) * Number(secondOperand);
  if (operator === '/')
    answer = Number(firstOperand)/Number(secondOperand);
  roundAnswer(answer);
}

function roundAnswer(number) {
  answer = Math.round((number + Number.EPSILON) * 1000) / 1000
  displayBottom.innerText = answer;
  displayTop.innerText = firstOperand + ' ' + operator + ' ' + secondOperand + ' = ';
}

function clearAll() {
  entries = '';
  displayTop.innerText = '';
  displayBottom.innerText = '';
  firstOperand = '';
  secondOperand = '';
  operand = '';
  operatorClicked = false;
}

operate();
