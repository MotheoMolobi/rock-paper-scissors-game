let computerScore = 0;
let playerScore = 0;
const choices = ["rock", "paper", "scissors"];

const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const displayPlayerScore = document.querySelector("#displayPlayerScore");
const displayComputerScore = document.querySelector("#displayComputerScore");

function getComputerChoice() {
    return choices[Math.floor(Math.random() * 3)];
}

function updateResultDisplay(result) {
    resultDisplay.textContent = result;
    resultDisplay.classList.remove("greenText", "redText");
    
    if (result === "You win") {
        resultDisplay.classList.add("greenText");
    } else if (result === "You lose") {
        resultDisplay.classList.add("redText");
    }
}

function playGame(playerChoice) {
    const computerChoice = getComputerChoice();
    let result = "";
    
    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;

    // If it's a draw
    if (playerChoice === computerChoice) {
        result = "It's a draw";
    }
    // If player wins
    else if (
        (playerChoice === "rock" && computerChoice === "scissors") || 
        (playerChoice === "paper" && computerChoice === "rock") || 
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win";
        playerScore++;
    }
    // If computer wins
    else {
        result = "You lose";
        computerScore++;
    }

    // Update the display elements
    updateResultDisplay(result);
    displayPlayerScore.textContent = `PLAYER SCORE: ${playerScore}`;
    displayComputerScore.textContent = `COMPUTER SCORE: ${computerScore}`;
}