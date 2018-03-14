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
    console.log("player: ", playerSelection);
    console.log("computer: ", computerSelection)
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

  const rock = document.querySelector(".rock");
  rock.addEventListener("click", () => playRound("rock", computerPlay()));
  const paper = document.querySelector(".paper");
  paper.addEventListener("click", () => playRound("paper", computerPlay()));
  const scissors = document.querySelector(".scissors");
  scissors.addEventListener("click", () => playRound("scissors", computerPlay()));

}());
