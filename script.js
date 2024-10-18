
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

