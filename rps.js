const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerScoreP = document.getElementById("player-score");
const computerScoreP = document.getElementById("computer-score");
const playerChoiceP = document.getElementById("player-choice");
const computerChoiceP = document.getElementById("computer-choice");
const resultP = document.getElementById("result");
const gameBoard = document.getElementById("game-board");
const newGame = document.getElementById("new-game-board");
let playerScore = 0;
let computerScore = 0;

window.onload = getPlayerChoice();

function getComputerChoice() {
  const options = Math.floor(Math.random() * 3);

  switch (options) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getPlayerChoice() {
  rockBtn.addEventListener("click", (e) => {
    return playRound("rock");
  });
  paperBtn.addEventListener("click", (e) => {
    return playRound("paper");
  });
  scissorsBtn.addEventListener("click", (e) => {
    return playRound("scissors");
  });
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    scoreKeep("", playerChoice, computerChoice);
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice == "scissors" && computerChoice == "paper") ||
    (playerChoice == "paper" && computerChoice == "rock")
  ) {
    playerScore++;
    scoreKeep("Player Wins", playerChoice, computerChoice);
  } else {
    computerScore++;
    scoreKeep("Computer Wins", playerChoice, computerChoice);
  }
  playGame(playerScore, computerScore);
}

function scoreKeep(result, playerChoice, computerChoice) {
  playerChoiceP.innerHTML = `You picked ${playerChoice}`;
  computerChoiceP.innerHTML = `Computer picked ${computerChoice}`;
  resultP.innerHTML = result;

  if (result === "Player Wins") {
    playerScoreP.innerHTML = `Player Score - ${playerScore}`;
    computerScoreP.innerHTML = `Computer Score - ${computerScore}`;
  } else result === "Computer Wins";
  computerScoreP.innerHTML = `Computer Score - ${computerScore}`;
  playerScoreP.innerHTML = `Player Score - ${playerScore}`;
}

function playGame(playerScore, computerScore) {
  if (playerScore == 5 || computerScore == 5) setWinner();
}

function setWinner() {
  let winner;
  if (playerScore > computerScore) winner = "Player Is The Winner!";
  else winner = "Computer Is The Winner!";

  newGame.innerHTML = `
  <h1>${winner}</h1>
  <p>Player Score - ${playerScore}</p>
  <p>Computer Score - ${computerScore}</p>
  <button id="reset-game">Reset Game</button>
  `;

  playerScore = 0;
  computerScore = 0;

  const continueGame = document.getElementById("reset-game");
  continueGame.addEventListener("click", () => {
    newGame.innerHTML = ``;

    resetGame();
  });
}

function resetGame() {
  playerChoiceP.innerHTML = "";
  computerChoiceP.innerHTML = "";
  resultP.innerHTML = "";
  playerScoreP.innerHTML = "Player Score - 0";
  computerScoreP.innerHTML = "Computer Score - 0";
}
