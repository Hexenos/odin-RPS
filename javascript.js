function getHumanChoice() {
    // Prompt user input
    let choice = prompt("Choose an option: Rock, Paper, or Scissors").toLowerCase();
    // Convert user input to value
    return(choice);
    // Return value
}


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


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(choice, choiceRandom) {
        console.log(choice);
        console.log(choiceRandom);
         // Determine value hierarchy
         if (choice === choiceRandom) {
             console.log("It's a tie!");
         } else if (choice === "rock" && choiceRandom === "scissors") {
             humanScore++;
             console.log("You win! Rock beats Scissors.");
         } else if (choice === "scissors" && choiceRandom === "paper") {
             humanScore++;
             console.log("You win! Scissors beats Paper.");
         } else if (choice === "paper" && choiceRandom === "rock") {
             humanScore++;
             console.log("You win! Paper beats Rock.");
         } else {
             computerScore++;
             console.log(`You lose! ${choiceRandom.charAt(0).toUpperCase() + choiceRandom.slice(1)} beats ${choice.charAt(0).toUpperCase() + choice.slice(1)}`);
         } 
         // Compare both parameters
         // Output winner of round
         // Increase score for winning side
     }

     for (let i = 0; i < 5 ;i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
     }
}

playGame();