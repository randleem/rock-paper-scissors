
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


function playAgain() {
    confirm("Another round?");
}

let playAgainResult = playAgain();

console.log(playAgainResult);


// let player1 = prompt("Choose rock paper or scissors");
// let player2 = getComputerMove();

// let result = getWinner(player1, player2);

// alert(result);
