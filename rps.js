// Step 2: Write the logic to get the computer choice
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

function verifyWinner(playerChoice, computerChoice) {
 if (playerChoice === computerChoice) {
  return "Tie";
 }
 else if (
  (playerChoice == "rock" && computerChoice == "scissors") ||
  (playerChoice == "scissors" && computerChoice == "paper") ||
  (playerChoice == "paper" && computerChoice == "rock" )
 ) {
  return "Player";
 }
 else {
  return "Computer";
 }
}

// Write the logic to get the player choice
function getPlayerChoice() {
 let input = false;
 while (input === false) {
  const choice = prompt("Choose one: Rock, Paper, or Scissors");
  if (choice === null) {
   continue;
  }
  else if (choice.toLowerCase() === "rock") {
   return "rock";
  }
  else if (choice.toLowerCase() === "paper") {
   return "paper";
  }
  else if (choice.toLowerCase() === "scissors") {
   return "scissors";
  }
 }

}

// Entire game logic and round logic
function playGame() {

 function playRound(playerChoice, computerChoice) {
  const result = verifyWinner(playerChoice, computerChoice);
  if (result == "Tie") {
   return "it's a tie!";
  }
  else if (result == "Player") {
   return `Player wins! ${playerChoice} beats ${computerChoice}`
  }
  else {
   return `Computer wins, you lose. ${computerChoice} beats ${playerChoice}`
  }
 }
  
 // Score logic- computer and player score variables
 let playerScore = 0;
 let computerScore = 0;
 console.log("Welcome! Let's play.")
 for (let i = 0; i < 5; i++){
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  console.log(playRound(playerChoice, computerChoice));
  console.log("**************");
  if (verifyWinner(playerChoice, computerChoice) === "Player") {
   playerScore++;
  }
  else if (verifyWinner(playerChoice, computerChoice) === "Computer") {
   computerScore++;
  }
 }
 console.log("Game Over")
 if (playerScore > computerScore) {
  console.log("Player Wins");
 }
 else if (computerScore > playerScore) {
  console.log("Computer Wins");
 }
 else {
  console.log("We have a tie");
 }
}

playGame()