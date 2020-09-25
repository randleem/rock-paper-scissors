let playerMove = "scissors";
let computerMove = "rock";

if  (
        (playerMove === "rock" && computerMove === "rock") ||
        (playerMove === "paper" && computerMove === "paper") ||
        (playerMove === "scissors" && computerMove === "scissors")
    ) {

        console.log("draw")

    } else if (
        (playerMove === "rock" && computerMove === "paper") ||
        (playerMove === "paper" && computerMove === "scissors") ||
        (playerMove === "scissors" && computerMove === "rock") 

    ) {

        console.log("computer wins")

    } else if (
        (playerMove === "rock" && computerMove === "scissors") ||
        (playerMove === "paper" && computerMove === "rock") ||
        (playerMove === "scissors" && computerMove === "paper")
    ) {

        console.log("player wins")

    }

