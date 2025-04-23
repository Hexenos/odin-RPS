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

function getHumanChoice() {
    
}