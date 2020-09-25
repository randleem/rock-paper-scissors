
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
    }else if (random === 1) {
        return "paper";
    }else if (random === 2) {
        return "scissors";
    }
}

function endMessage(result) {
    let message = ``;
    if (result === 0) {
        message = `its a draw`;
    }else if (result === 1) {
        message = `You Win!`;
    }else if (result === -1) {
        message = `Computer Wins`;
    }
    return message;
}

let play = true;
let gamesPlayed = 0;
while (play === true) {
    let player1 = prompt("Choose rock paper or scissors");
    let player2 = getComputerMove();
    let result = getWinner(player1, player2);
    gamesPlayed++;
    play = confirm(`The result is ${endMessage(result)}, would you like to play again? \n Games Played ${gamesPlayed}`);
}

// Variable for number of games played, everytime getWinner is called 1 is added to number of games played
// Variable for accumulation of results from games played keeps track of wins losses and draws
// Number of games played and wins, losses and draws displayed in end message




