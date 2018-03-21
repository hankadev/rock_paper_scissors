(function() {
  "use strict";
  const rock = document.querySelector(".rock");
  const paper = document.querySelector(".paper");
  const scissors = document.querySelector(".scissors");
  let playerScore = 0;
  let computerScore = 0;
  let message = "";

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
    document.querySelector(".winner").textContent = "";
    if (playerSelection === computerSelection) {
      message = "Tie!";
    } else if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        computerScore += 1;
        message = "Paper beats rock.";
      } else {
        playerScore += 1;
        message = "Rock beats scissors.";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        playerScore += 1;
        message = "Paper beats rock.";
      } else {
        computerScore += 1;
        message = "Scissors beats paper.";
      }
    } else {
      if (computerSelection === "rock") {
        computerScore += 1;
        message = "Rock beats scissors.";
      } else {
        playerScore += 1;
        message = "Scissors beats paper.";
      }
    }
    const playerChoice = document.querySelector(".playerChoice");
    playerChoice.textContent = playerSelection;
    const computerChoice = document.querySelector(".computerChoice");
    computerChoice.textContent = computerSelection;
    const result = document.querySelector(".result");
    result.textContent = message;
    const player = document.querySelector(".player");
    player.textContent = playerScore;
    const computer = document.querySelector(".computer");
    computer.textContent = computerScore;
    gameOver(playerScore, computerScore);
  }

  function gameOver(playerScore, computerScore) {
    if (playerScore === 5) {
      document.querySelector(".winner").textContent = "You won the game!";
      replay();
    }
    if (computerScore === 5) {
      document.querySelector(".winner").textContent = "You lost the game!";
      replay();
    }
  }

  function replay() {
    playerScore = 0;
    computerScore = 0;
    message = "";
  }

  function game() {
    rock.addEventListener("click", () => playRound("rock", computerPlay()));
    paper.addEventListener("click", () => playRound("paper", computerPlay()));
    scissors.addEventListener("click", () => playRound("scissors", computerPlay()));
  }
  document.addEventListener("DOMContentLoaded", function() {
    game();
  });
}());
