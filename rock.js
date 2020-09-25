
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

function upDateScore(result, object){
    if (result === 0) {
        object.draws++;
    } else if (result === 1) {
        object.wins++;
    } else if (result === -1) {
        object.losses++;
    }
}

let play = true;
let gamesPlayed = 0;
let player1Score = {
    wins: 0,
    losses: 0,
    draws: 0
};


while (play === true) {
    let player1 = prompt("Choose rock paper or scissors");
    let player2 = getComputerMove();
    let result = getWinner(player1, player2);
    gamesPlayed++;
    upDateScore(result, player1Score);
    play = confirm(`The result is ${endMessage(result)}, would you like to play again?\n
                    Games Played: ${gamesPlayed}\n
                    Your Wins: ${player1Score.wins}\n
                    Your Draws: ${player1Score.draws}\n
                    Your Losses: ${player1Score.losses}`);
}

// H1 Lets play Rock, Paper, Scissors
// H2 "Player 1 its Your Move!" 
// three buttons - Rock Paper Scissors
// Display of Scores showing games played, wins losses and draws all set to zero to start

// each button will trigger a game start event with players selection
// Then when player has made a selection the result appears and scores update

