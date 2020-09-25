
function getWinner(player1, player2) {
    if  (
            (player1 === "rock" && player2 === "rock") ||
            (player1 === "paper" && player2 === "paper") ||
            (player1 === "scissors" && player2 === "scissors")
        ) {
            console.log(0)
        } else if (
            (player1 === "rock" && player2 === "paper") ||
            (player1 === "paper" && player2 === "scissors") ||
            (player1 === "scissors" && player2 === "rock") 
        ) {
            console.log(-1)
        } else if (
            (player1 === "rock" && player2 === "scissors") ||
            (player1 === "paper" && player2 === "rock") ||
            (player1 === "scissors" && player2 === "paper")
        ) {
            console.log(1)
        }
}

    let result = getWinner("paper", "rock");
