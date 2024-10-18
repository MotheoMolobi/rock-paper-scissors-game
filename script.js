//Scores
let humanScore = 0;
let computerScore = 0; 

function getComputerChoice() {
    computerNum = parseInt(Math.random() *10);
    if(computerNum < 4) {
        computerChoice = "rock";
    }
    else if(computerNum < 7) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }
    return computerChoice;
}
//check for computer choice
//console.log(getComputerChoice());

function getHumanChoice() {
    humanChoice = parseInt(prompt("Enter your choice\n rock = 1\n paper = 2\n scissors = 3" ));
    return humanChoice;
}
//Calling the human choice function
getHumanChoice();

function playRound(humanChoice, computerChoice) {
    
}

