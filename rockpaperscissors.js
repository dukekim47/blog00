function computerGame () {
let result;
let computerPlay = Math.random() * 10;
computerPlay < 4 ? result = "ROCK" : computerPlay < 7 ? result ="PAPER" : result = "SCISSORS";
return result;}

 let playerScore = 0;
 let computerScore = 0;

let pi = prompt("Rock Paper Scissors!").toUpperCase();

function theGame () {
    let pi = playerInput.toUpperCase();
    if (pi == "ROCK" && computerGame() == "PAPER") {computerScore++}
    else if (pi == "PAPER" && computerGame() == "SCISSORS") {computerScore++}
    else if (pi == "SCISSORS" && computerGame() == "ROCK") {computerScore++}
    else if (pi == computerGame()) {result = "TIE"} else {playerScore++};
}

function startGame () {
    for (i = 0; i < 5; i++) {
        let playerInput = prompt("Rock Paper Scissors!");
        computerGame();
        theGame();
        alert(playerScore);
        alert(computerScore);}

    if (playerScore > computerScore) {return "YOU WIN"} 
      else if (playerScore == computerScore) {return "TIE"} 
      else {return "COMPUTER WINS"};
    }

