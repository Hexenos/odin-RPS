function getHumanChoice() {
    // Prompt user input
    let choice = prompt("Choose an option: rock, paper, or scissors");
    // Convert user input to value
    return(choice);
    // Return value
}

console.log(getHumanChoice());

function getComputerChoice() {
    let choiceRandom = Math.random();

    if (choiceRandom > 0.66) {
        return("scissors");
    } else if (choiceRandom >= 0.33 && choiceRandom < 0.66) {
        return("paper");
    } else {
        return("rock");
    }
    
}

console.log(getComputerChoice());
