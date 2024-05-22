// Function to get the computer's choice
function getComputerChoice() {
    const randomNum = Math.floor(Math.random() * 3);
    switch (randomNum) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

// Function to get the human's choice
function getHumanChoice() {
    const choices = ["rock", "paper", "scissors"];
    let userInput = prompt("Please enter rock, paper, or scissors:").toLowerCase();

    while (!choices.includes(userInput)) {
        userInput = prompt("Invalid choice. Please enter rock, paper, or scissors:").toLowerCase();
    }

    return userInput;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase(); // Normalize human choice

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`);
        return 'human';
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`);
        return 'computer';
    }
}

// Function to play the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        const result = playRound(humanChoice, computerChoice);

        if (result === 'human') {
            humanScore++;
        } else if (result === 'computer') {
            computerScore++;
        }
        
        console.log(`Round ${i + 1} result: Human score = ${humanScore}, Computer score = ${computerScore}`);
    }

    console.log("Game over!");
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

// Start the game
playGame();
