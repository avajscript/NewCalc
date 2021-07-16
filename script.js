window.addEventListener("DOMContentLoaded", () => {
  const operators = ["*", "/", "-", "+", "="];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var EQUATION = "";
  var DOUBLEOPERATOR = [];
  const textBox = document.getElementById("output");
  (function () {
    for (let i = 0; i <= 9; i++) {
      const button = document.getElementById(`button-${i}`);
      button.addEventListener("click", display);
    }
    for (let operator in operators) {
      const button = document.getElementById(`button${operators[operator]}`);
      button.addEventListener("click", display);
    }
    document.getElementById("clear").addEventListener("click", clearScreen);
    document.getElementById("delete").addEventListener("click", deleteScreen);
    document.getElementById("button.").addEventListener("click", display);
  })();

  function preError(button) {
    let numbers = EQUATION.split(/[\-*+\/]/g);

    if (EQUATION == "" && operators.indexOf(button) >= 0) {
      return 1;
    }
    if (EQUATION !== "") {
      if (
        operators.indexOf(button) >= 0 &&
        operators.includes(EQUATION[EQUATION.length - 1])
      ) {
        return 1;
      }
      if (numbers[1] == undefined) {
        if (button == "." && numbers[0].includes(".")) {
          return 1;
        }
      } else {
        console.log("?");
        if (button == "." && numbers[1].includes(".")) {
          return 1;
        }
      }
    }

    return 0;
  }

  function display(event) {
    button = event.target.innerText;
    if (preError(button)) {
      return;
    }

    textBox.innerText = button;
    EQUATION += textBox.innerText;
    equationPrerequisites(EQUATION, button);
  }

  function clearScreen() {
    EQUATION = "";
    DOUBLEOPERATOR = [];
    textBox.textContent = "";
  }

  function deleteScreen() {
    EQUATION = EQUATION.slice(0, EQUATION.length - 1);
    textBox.textContent = EQUATION;
    console.log(EQUATION);
  }

  function equation(numbers, operator) {
    let number1 = parseFloat(numbers[0]);
    let number2 = parseFloat(numbers[1]);
    let result = 0;
    if (operator[0] == "+") {
      result = number1 + number2;
      console.log(result);
    }
    if (operator[0] == "-") {
      result = number1 - number2;
      console.log(result);
    }
    if (operator[0] == "*") {
      result = number1 * number2;
      console.log(result);
    }
    if (operator[0] == "/") {
      result = number1 / number2;
      console.log(result);
    }
    textBox.innerText = result;
  }

  function findOperator(equation) {
    console.log(equation);
    return equation.match(/[\-*+\/]/g);
  }

  function resetGlobals() {
    DOUBLEOPERATOR.shift();
    console.log(DOUBLEOPERATOR);
    EQUATION = `${textBox.innerText}${DOUBLEOPERATOR}`;

    //EQUATION += DOUBLEOPERATOR[0];
  }

  function equationPrerequisites(EQ, button) {
    console.log(EQ);
    let numbers = EQ.split(/[\-*+\/]/g);

    let operator = "";

    let ifNumber = numbers.indexOf(button);
    ifNumber = numbers[ifNumber];
    let ifOperator = operators.indexOf(button);
    ifOperator = operators[ifOperator];

    if (ifNumber === undefined) {
      if (EQ[EQ.length - 1] == "=") {
        operator = [findOperator(EQ)];
      }
      if (operators.includes(EQ[EQ.LENGTH - 1])) {
        let lastOperator = findOperator(EQ);
        DOUBLEOPERATOR.push(lastOperator[lastOperator.length - 1]);
      }
    }
    if (ifOperator === undefined) {
      textBox.textContent = numbers[numbers.length - 1];
    }

    if (operator.length == 1) {
      equation(numbers, operator);
      resetGlobals();
    }
    if (DOUBLEOPERATOR.length >= 2) {
      equation(numbers, DOUBLEOPERATOR[0]);
      resetGlobals();
    }
  }

  function add(num1, num2) {
    return num1 + num2;
  }

  function subtract(num1, num2) {
    return num1 - num2;
  }

  function multiply(num1, num2) {
    return num1 * num2;
  }

  function divide(num1, num2) {
    return num1 / num2;
  }
});
