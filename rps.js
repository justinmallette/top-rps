/* Make Computer choice

CALCULATE a number between 0 and 1
IF number < .34
    THEN set the computer's choice to "Rock"
IF number >= .34 AND < .67
    THEN set the computer's choice to "Paper"
ELSE
    Set the computer's choice to "Scissors"
*/

let computerChoice = "Not Yet Set";

getComputerChoice();


function getComputerChoice() {
    Math.random();
    if (Math.random() < .34) {
        computerChoice = "Rock"
    } else if (Math.random() >= .34 || Math.random() < .67) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }

};

console.log(computerChoice);


/* Get Human choice

PROMPT human for a choice between rock, paper, and scissors
IF human selects rock
    THEN set the human's choice to "Rock"
IF human selects paper
    THEN set the human's choice to "Paper"
IF human selects scissors
    THEN set then human's choice to "Scissors"
*/

let humanChoice = prompt("Rock, Paper, or Scissors?");

getHumanChoice();


function getHumanChoice() {
    if (humanChoice.toLowerCase() == "rock" ) {
        humanChoice = "Rock";
    } else if (humanChoice.toLowerCase() == "paper") {
        humanChoice = "Paper";
    } else if (humanChoice.toLowerCase() == "scissors") {
        humanChoice = "Scissors";
    } else {
        humanChoice = prompt("That's not an option. Rock, Paper, or Scissors?");
        getHumanChoice();
    }
}

console.log(humanChoice);

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if ((humanSelection == "Rock" && computerSelection == "Scissors") || (humanSelection == "Scissors" && computerSelection == "Paper") || (humanSelection == "Paper" && computerSelection == "Rock")) {
        alert("You win this round! ${humanSelection} beats ${computerSelection}.")
        humanScore ++;
    } else {
        alert("Still working on that.")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

console.log(humanChoice, computerChoice);