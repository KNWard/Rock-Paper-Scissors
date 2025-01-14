// Step 2: Write the logic to get the computer choice
function getComputerChoice() {
 let numChoice = Math.floor(Math.random() * 3);

 switch (numChoice) {
  case 0:
   return "rock";
  case 1:
   return "paper";
  case 2:
   return "scissors";
 }
}

console.log(getComputerChoice());

// Step 3: Write the logic to get the human choice
function getHumanChoice() {
 let choice = prompt("Choose one: Rock, Paper, or Scissors");

 if (choice.toLowerCase() === "rock") {
  console.log("rock");
 } else if (choice.toLowerCase() === "paper") {
  console.log("paper");
 } else if (choice.toLowerCase() === "scissors") {
  console.log("scissors");
 } else {
  console.log("Please make a choice.")
 }
}
getHumanChoice();

// Step 4: Declare the players score variables
let humanScore = 0;
let computerScore = 0;

// Step 5: Write the logic to play a single round
function playRound(humanChoice, computerChoice) {

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();