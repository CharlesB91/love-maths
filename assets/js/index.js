////// event listeners set to fire when any button is clicked on the page when loaded /////
document.addEventListener("DOMContentLoaded", function () {
  let buttons = document.getElementsByTagName("button");

  for (let button of buttons) {
    button.addEventListener("click", function () {
      if (this.getAttribute("data-type") === "submit") {
        alert("You clicked Submit");
      } else {
        let gameType = this.getAttribute("data-type");
        alert(`You clicked ${gameType}`);
      }
    });
  }
});

/**
 * The Main game "loop", called when the script is first loaded
 * and after the users answer has been processed
 */
function runGame() {
  // Creates Random Numbers from 1 - 25 ////
  let num1 = Math.floor(Math.random() * 25) + 1;
  let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {}

function calculateAnswer() {}

function incrementScore() {}

function incrementWrongAnswer() {}

function additionQuestion() {}

function subtractionQuestion() {}

function multiplyQuestion() {}
