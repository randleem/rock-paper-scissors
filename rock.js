let playerMove = "rock";
let computerMove = "paper";

if (playerMove === "rock" && computerMove === "rock") {
    return "draw";
}

if (playerMove === "paper" && computerMove === "paper") {
    return "draw";
}

if (playerMove === "scissors" && computerMove === "scissors") {
    return "draw";
}

if (playerMove === "rock" && computerMove === "paper") {
    return "computer wins";
}

if (playerMove === "paper" && computerMove === "paper") {
    return "draw";
}

if (playerMove === "scissors" && computerMove === "scissors") {
    return "draw";
}

