// Works out who won the game, Returns 0 for a draw, 1 for player 1 win -1 for player 2 win
function getWinner(player1, player2) {
    if  (
            (player1 === "rock" && player2 === "rock") ||
            (player1 === "paper" && player2 === "paper") ||
            (player1 === "scissors" && player2 === "scissors")
        ) {
            return 0;
        } else if (
            (player1 === "rock" && player2 === "paper") ||
            (player1 === "paper" && player2 === "scissors") ||
            (player1 === "scissors" && player2 === "rock") 
        ) {
            return -1;
        } else if (
            (player1 === "rock" && player2 === "scissors") ||
            (player1 === "paper" && player2 === "rock") ||
            (player1 === "scissors" && player2 === "paper")
        ) {
            return 1;
        }
}

// Randomly chooses a move for the computer, returns the move as a string
function getComputerMove(){
    let random = Math.floor(Math.random()*3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else if (random === 2) {
        return "scissors";
    }
}

// Returns a game ending message based on the result given by the getWinner() function
function endMessage(result) {
    let message = ``;
    if (result === 0) {
        message = `Its a Draw!`;
    } else if (result === 1) {
        message = `You Win!`;
    } else if (result === -1) {
        message = `You Lose!`;
    }
    return message;
}

// Updates the scores in the playerScore object based on results given by the getWinner() function
function upDateScore(result, object){
    if (result === 0) {
        object.draws++;
    } else if (result === 1) {
        object.wins++;
    } else if (result === -1) {
        object.losses++;
    }
}


// Initialise DOM references for Images
let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

// Add event listeners to DOM references
rockButton.addEventListener("click", rockClick);
paperButton.addEventListener("click", paperClick);
scissorsButton.addEventListener("click", scissorsClick);

// Functions called by DOM event listeners
function rockClick() { playGame("rock") }
function paperClick() { playGame("paper") }
function scissorsClick() { playGame("scissors") }

// Initialise DOM references for Scores
let winsUpdate = document.querySelector("#gamesWon");
let lossesUpdate = document.querySelector("#gamesLost");
let drawsUpdate = document.querySelector("#gamesDrawn");
let playsUpdate = document.querySelector("#gamesPlayed");
let resultUpdate = document.querySelector("#resultsMessage");


// Initialise games score variables and values 
let gamesPlayed = 0;

// Player score object used by the upDateScore() function
let playerScore = {
    wins: 0,
    losses: 0,
    draws: 0
};


// Game play function that ties together game logic, scores and DOM updates
function playGame(playerMove) {
    // Do the game logic
    let player2 = getComputerMove();
    let result = getWinner(playerMove, player2);
    
    // Update scores
    gamesPlayed++;
    upDateScore(result, playerScore);
    
    // Update the DOM
    winsUpdate.innerText = `Games Won: ${playerScore.wins}`;
    lossesUpdate.innerText = `Games Lost: ${playerScore.losses}`;
    drawsUpdate.innerText = `Games Drawn: ${playerScore.draws}`;
    playsUpdate.innerText = `Games Played: ${gamesPlayed}`;
    resultUpdate.innerText = `You played ${playerMove[0].toUpperCase()+playerMove.slice(1)}, the Computer played ${player2[0].toUpperCase()+player2.slice(1)}\n
                             ${endMessage(result)}`
}


