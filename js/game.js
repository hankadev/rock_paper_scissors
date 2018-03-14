(function() {
  "use strict";

  function computerPlay() {
    const randInt = Math.floor(Math.random() * 3);
    if (randInt === 1) {
      return "rock";
    } else if (randInt === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }

  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return "Tie!"
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return "You lost! Paper beats rock."
      } else {
        return "You won! Rock beats scissors."
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You won! Paper beats rock."
      } else {
        return "You lost! Scissors beats paper."
      }
    } else {
      if (computerSelection === "rock") {
        return "You lost! Rock beats scissors."
      } else {
        return "You won! Scissors beats paper."
      }
    }
  }

  const playerSelection = "scissors";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));

}());
