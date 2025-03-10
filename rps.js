const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const playerScoreP = document.getElementById("player-score");
const computerScoreP = document.getElementById("computer-score");
const playerChoiceP = document.getElementById("player-choice");
const computerChoiceP = document.getElementById("computer-choice");
const resultP = document.getElementById("result");
const tagLine = document.getElementById("tag-line");
const gameBoard = document.getElementById("game-board");
const newGame = document.getElementById("new-game-board");
let playerScore = 0;
let computerScore = 0;

window.onload = getPlayerChoice();

function getComputerChoice() {
  const options = Math.floor(Math.random() * 3);

  switch (options) {
    case 0:
      return "Rock";
    case 1:
      return "Paper";
    case 2:
      return "Scissors";
  }
}

function getPlayerChoice() {
  rockBtn.addEventListener("click", (e) => {
    tagLine.style.display = 'none';
    // gameBoard.style.display = 'flex';
    return playRound("Rock");
  });
  paperBtn.addEventListener("click", (e) => {
    tagLine.style.display = 'none';
    return playRound("Paper");
  });
  scissorsBtn.addEventListener("click", (e) => {
    tagLine.style.display = 'none';
    return playRound("Scissors");
  });
}

function playRound(playerChoice) {
  let computerChoice = getComputerChoice();

  if (playerChoice === computerChoice) {
    scoreKeep("It's a Tie. No point", playerChoice, computerChoice);
  } else if (
    (playerChoice === "Rock" && computerChoice === "Scissors") ||
    (playerChoice == "Scissors" && computerChoice == "Paper") ||
    (playerChoice == "Paper" && computerChoice == "Rock")
  ) {
    playerScore++;
    scoreKeep("Your point", playerChoice, computerChoice);
  } else {
    computerScore++;
    scoreKeep("Computer's point", playerChoice, computerChoice);
  }
  playGame(playerScore, computerScore);
}

function scoreKeep(result, playerChoice, computerChoice) {
  playerChoiceP.innerHTML = `You picked : ${playerChoice}`;
  playerChoiceP.style.textShadow = "2px 2px 5px #3D8BFF";
  computerChoiceP.innerHTML = `Computer picked: ${computerChoice}`;
  computerChoiceP.style.textShadow = "2px 2px 5px #FFCB6B";
  resultP.innerHTML = result;

  if (result === "Your point") {
    playerScoreP.innerHTML = `Your Score: ${playerScore}`;
    computerScoreP.innerHTML = `Computer Score: ${computerScore}`;
  } else result === "Computer's point";
  computerScoreP.innerHTML = `Computer Score: ${computerScore}`;
  playerScoreP.innerHTML = `Your Score: ${playerScore}`;
}

function playGame(playerScore, computerScore) {
  if (playerScore == 5 || computerScore == 5) setWinner();
}

function setWinner() {
  let winner;
  if (playerScore > computerScore) winner = "You're The Winner!";
  else winner = "Computer is The Winner!";

  gameBoard.style.display = "none";
  newGame.innerHTML = `
  <h1>${winner}</h1>
  <p>Your Score: ${playerScore}</p>
  <p>Computer Score: ${computerScore}</p>
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
  tagLine.style.display = 'flex';
  gameBoard.style.display = 'flex';
  playerChoiceP.innerHTML = "";
  computerChoiceP.innerHTML = "";
  resultP.innerHTML = "";
  playerScoreP.innerHTML = "Player Score: 0";
  computerScoreP.innerHTML = "Computer Score: 0";
}
