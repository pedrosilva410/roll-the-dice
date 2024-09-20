const button = document.getElementById("btn");
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const winner = document.getElementById("title");

button.addEventListener("click", randomDice);

function randomDice() {
  console.log("boas");

  let diceNumber1 = Math.floor(Math.random() * 6) + 1;
  player1Dice.src = "images/dice" + diceNumber1 + ".png";

  let diceNumber2 = Math.floor(Math.random() * 6) + 1;
  player2Dice.src = "images/dice" + diceNumber2 + ".png";

  if (diceNumber1 > diceNumber2) {
    winner.innerHTML = "Player 1 wins!";
  } else if (diceNumber2 > diceNumber1) {
    winner.innerHTML = "Player 2 wins!";
  } else {
    winner.innerHTML = "Draw!!";
  }
}
