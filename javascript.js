// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNum = Math.floor(Math.random() * 3);
    return choices[randomNum];
}

// Function to play a single round
function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    let resultMessage = "";

    if (humanChoice === computerChoice) {
        resultMessage = `It's a tie! Both chose ${humanChoice}`;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage = `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}`;
        humanScore++;
    } else {
        resultMessage = `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}`;
        computerScore++;
    }

    updateResults(resultMessage);
    updateScore();
}

// Function to update the results in the DOM
function updateResults(message) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.textContent = message;
}

// Function to update the score in the DOM
function updateScore() {
    const scoreDiv = document.getElementById('score');
    scoreDiv.textContent = `Human: ${humanScore} - Computer: ${computerScore}`;

    if (humanScore === 5) {
        scoreDiv.textContent += " - You win the game!";
        disableButtons();
    } else if (computerScore === 5) {
        scoreDiv.textContent += " - You lose the game!";
        disableButtons();
    }
}

// Function to disable buttons when the game ends
function disableButtons() {
    document.getElementById('rock').disabled = true;
    document.getElementById('paper').disabled = true;
    document.getElementById('scissors').disabled = true;
}

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Add event listeners to buttons
document.getElementById('rock').addEventListener('click', () => playRound('rock'));
document.getElementById('paper').addEventListener('click', () => playRound('paper'));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors'));
