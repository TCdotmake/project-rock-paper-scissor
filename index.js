const RPS = ["Rock", "Paper", "Scissors"];
const ROUNDS = 5;
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

function handleClick(e) {
  console.log("e.target", e.target.dataset.choice);
  newRoundMsg();
  const result = playRound(e.target.dataset.choice, getComputerChoice());
  scoreObj.update(result.result);
  updateUI({ msg: result.msg });
}

function updateUI({ msg }) {
  updateScoreBoard();
  updateLog(msg);
  gameRecap();
}

function newRoundMsg() {
  const { player, cpu, tie } = scoreObj;
  if ((player + cpu + tie) % ROUNDS === 0) {
    const msg = "------New Round------";
    updateLog(msg);
    scoreObj.reset();
  }
}

function updateScoreBoard() {
  const player = document.getElementById("player");
  const cpu = document.getElementById("cpu");
  const tie = document.getElementById("tie");
  player.innerText = scoreObj.player;
  cpu.innerText = scoreObj.cpu;
  tie.innerText = scoreObj.tie;
}

function updateLog(msg) {
  const log = document.getElementById("gameLog");
  const entry = document.createElement("p");
  entry.innerText = msg;
  console.log("entry", entry);
  log.insertAdjacentElement("afterbegin", entry);
}

function gameRecap() {
  const { player, cpu, tie } = scoreObj;
  if (player + cpu + tie === ROUNDS) {
    let msg;
    if (player > cpu) {
      msg = "***Game set, you are winner!***";
    } else if (cpu > player) {
      msg = "****You lose!****";
    } else msg = "******Tie!*****";
    updateLog(msg);
  }
}

const buttons = document.querySelectorAll(".rpsBtn");
buttons.forEach((button) => {
  button.addEventListener("click", handleClick);
});

const scoreObj = {
  player: 0,
  cpu: 0,
  tie: 0,
  update(score) {
    score > 0 ? this.player++ : score < 0 ? this.cpu++ : this.tie++;
  },
  reset() {
    this.player = 0;
    this.cpu = 0;
    this.tie = 0;
  },
};
