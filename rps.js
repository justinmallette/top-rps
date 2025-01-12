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

getComputerChoice();
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