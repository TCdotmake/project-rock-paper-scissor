const RPS = ["Rock", "Paper", "Scissors"];
function getComputerChoice() {
  return RPS[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
  const player = playerSelection.toUpperCase();
  const cpu = computerSelection.toUpperCase();
  const winMsg = `You win! ${playerSelection} beats ${computerSelection}!`;
  const loseMsg = `You lost! ${computerSelection} beats ${playerSelection}!`;
  const tieMsg = `You tied! ${playerSelection} vs ${computerSelection}.`;
  const win = { msg: winMsg, result: 1 };
  const lose = { msg: loseMsg, result: -1 };
  const tie = { msg: tieMsg, result: 0 };
  if (player === cpu) {
    return tie;
  }
  switch (player) {
    case "ROCK":
      if (cpu === "SCISSORS") {
        return win;
      }
      break;
    case "PAPER":
      if (cpu === "ROCK") {
        return win;
      }
      break;
    case "SCISSORS":
      if (cpu === "PAPER") {
        return win;
      }
      break;
  }
  return lose;
}

function game() {
  let player = 0;
  let cpu = 0;
  let tie = 0;
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter 'Rock', 'Paper', or 'Scissors'...");
    const round = playRound(playerSelection, getComputerChoice());
    console.log(round.msg);
    if (round.result === 0) {
      tie++;
    } else if (round.result > 0) {
      player++;
    } else {
      cpu++;
    }
  }
  console.log("Results: ");
  console.log("player", player);
  console.log("cpu", cpu);
  console.log("tie", tie);
  if (player > cpu) {
    console.log("You won!");
  } else if (cpu > player) {
    console.log("You lose!");
  } else {
    console.log("Tie!!");
  }
}

game();
