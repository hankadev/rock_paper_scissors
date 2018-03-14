(function() {
  "use strict";

  function computerPlay() {
    let randInt = Math.floor(Math.random() * 3);
    if (randInt === 1) {
      return "rock";
    } else if (randInt === 2) {
      return "paper";
    } else {
      return "scissors";
    }
  }

}());
