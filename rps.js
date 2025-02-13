// Initialize computer choice for RPS round

function getComputerChoice() {
    let computerChoice;
    Math.random();
    if (Math.random() < .34) {
        computerChoice = "Rock"
    } else if (Math.random() < .67) {
        computerChoice = "Paper"
    } else {
        computerChoice = "Scissors"
    }
    return computerChoice
};

// Initialize human choice for RPS round

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper, or Scissors?");
    if (humanChoice.toLowerCase() === "rock" ) {
        return "Rock";
    } else if (humanChoice.toLowerCase() === "paper") {
        return "Paper";
    } else if (humanChoice.toLowerCase() === "scissors") {
        return "Scissors";
    } else {
        return humanChoice;
    }
}

// Set scores for each player

let humanScore = 0;
let computerScore = 0;

// Win condition logic for each round

function playGame() {



    // Play a round of Rock, Paper, Scissors

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == "Rock") {
            if (computerChoice == "Scissors") {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
                humanScore += 1;
            } else if (computerChoice == "Paper") {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
            } else {
                console.log(`You picked the same choice! No winners this round.`);
            }
        }

        if (humanChoice == "Paper") {
            if (computerChoice == "Rock") {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
                humanScore += 1;
            } else if (computerChoice == "Scissors") {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
            } else {
                console.log(`You picked the same choice! No winners this round.`);
            }
        }

        if (humanChoice == "Scissors") {
            if (computerChoice == "Paper") {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
                humanScore += 1;
            } else if (computerChoice == "Rock") {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
            } else {
                console.log(`You picked the same choice! No winners this round.`);
            }
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);


    console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);


    
}

// Play multiple rounds

for (let i = 0; i < 5; i++) playGame(i);

if (humanScore > computerScore) {
    console.log(`You won with a score of ${humanScore}! Congrats! Refresh the page to play again.`)
} else if (humanScore < computerScore) {
    console.log(`The computer won with a score of ${computerScore}! Refresh the page to play again.`)
} else {
    console.log(`You tied with scores of ${humanScore}! Refresh the page to play again.`)
}