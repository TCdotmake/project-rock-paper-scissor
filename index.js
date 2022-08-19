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
  if (player === cpu) {
    return tieMsg;
  }
  switch (player) {
    case "ROCK":
      if (cpu === "SCISSORS") {
        return winMsg;
      }
      break;
    case "PAPER":
      if (cpu === "ROCK") {
        return winMsg;
      }
      break;
    case "SCISSORS":
      if (cpu === "PAPER") {
        return winMsg;
      }
      break;
  }
  return loseMsg;
}

console.log(playRound("rock", getComputerChoice()));
console.log(playRound("rock", getComputerChoice()));
console.log(playRound("rock", getComputerChoice()));
console.log(playRound("rock", getComputerChoice()));
console.log(playRound("paper", getComputerChoice()));
console.log(playRound("paper", getComputerChoice()));
console.log(playRound("paper", getComputerChoice()));
console.log(playRound("paper", getComputerChoice()));
console.log(playRound("scissors", getComputerChoice()));
console.log(playRound("scissors", getComputerChoice()));
console.log(playRound("scissors", getComputerChoice()));
console.log(playRound("scissors", getComputerChoice()));
