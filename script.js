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
console.log("The computers choice is " + getComputerChoice());

function getHumanChoice() {
    humanChoice = prompt("Enter your choice\n 1)Rock\n 2)Paper\n 3)Scissors" );
    humanChoice.toLowerCase();
    return humanChoice;
}
//Calling the human choice function
console.log("Your choice is " + getHumanChoice());

function playRound(humanChoice, computerChoice) {
    //If it's a draw
    if(computerChoice == "rock" && humanChoice == "rock" || computerChoice == "paper" && humanChoice == "paper" 
            || computerChoice == "scissors" && humanChoice == "scissors"){
            console.log("It's a draw");
            humanScore =+ 1;
            computerScore =+ 1;
    }
    //If you win
    else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" 
        || humanChoice == "scissors" && computerChoice == "paper") {
            console.log("You win " + humanChoice + " beats " + computerChoice);
            humanScore =+ 1;
    }
    //If computer wins
    else {
        console.log("You lose " + computerChoice + " beats " + humanChoice);
        computerScore += 1;
    }
    
}

function playGame() {
    for(i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    if(humanScore > computerScore) {
        console.log(`You win You: ${humanScore} Computer: ${computerScore}`);
    }
    else if(humanScore < computerScore) {
        console.log(`You lose You: ${humanScore} Computer: ${computerScore}`);
    }
    else {
        console.log(`It's a draw`);
    }
}

playGame();
