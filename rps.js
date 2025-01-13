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

console.log(getHumanChoice());