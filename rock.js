
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

// let play = true;
// let gamesPlayed = 0;
// let player1Score = {
//     wins: 0,
//     losses: 0,
//     draws: 0
// };


//while (play === true) {
//     let player1 = prompt("Choose rock paper or scissors");
   // let player2 = getComputerMove();
    //let result = getWinner(player1, player2);
//     gamesPlayed++;
//     upDateScore(result, player1Score);
//     play = confirm(`The result is ${endMessage(result)}, would you like to play again?\n
//                     Games Played: ${gamesPlayed}\n
//                     Your Wins: ${player1Score.wins}\n
//                     Your Draws: ${player1Score.draws}\n
//                     Your Losses: ${player1Score.losses}`);
// }


//Task 7

let rockButton = document.querySelector("#rock");
let paperButton = document.querySelector("#paper");
let scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", rockClick);
paperButton.addEventListener("click", paperClick);
scissorsButton.addEventListener("click", scissorsClick);

function rockClick() {
    playGame("rock")
}

function paperClick() {
    playGame("paper")
}

function scissorsClick() {
    playGame("scissors")
}

let gamesPlayed = 0;
let playerScore = {
    wins: 0,
    losses: 0,
    draws: 0
};

function playGame(playerMove) {
    let player2 = getComputerMove();
    let result = getWinner(playerMove, player2);
    console.log(endMessage(result));  
    gamesPlayed++;
    upDateScore(result, playerScore);
    winsUpdate.innerText = `Games Won: ${playerScore.wins}`
    
}

let winsUpdate = document.querySelector("#gamesWon")
let lossesUpdate = document.querySelector("#gamesLost")
let drawsUpdate = document.querySelector("#gamesDrawn")
let playsUpdate = document.querySelector("gamesPlayed")



// Update the inner text of the Scores Area/ Games played
// Then when player has made a selection the result appears and scores update

