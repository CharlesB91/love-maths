////// event listeners set to fire when any button is clicked on the page when loaded /////
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit");
      } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
      }
    });
  }
  runGame("addition");
});

/**
 * The Main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame(gameType) {
  // Creates Random Numbers from 1 - 25 ////
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;

  if (gameType === "addition") {
    additionQuestion(num1, num2);
  } else {
    alert(`Unknown game type: ${gameType}`);
    throw `Unknown game type: ${gameType}. Aborting`;
  }
}

function checkAnswer() {}

function calculateAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function additionQuestion(operand1, operand2) {
  document.getElementById("operand1").textContent = operand1;
  document.getElementById("operand2").textContent = operand2;
  document.getElementById("operator").textContent = "+";
}

function subtractionQuestion() {}

function multiplyQuestion() {}
