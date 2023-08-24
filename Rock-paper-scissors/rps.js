const choices = ["rock", "paper", "scissors"];

function computerPlay() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

const buttons = document.querySelectorAll(".choice");
const resultText = document.querySelector(".result p");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = button.id;
    const computerChoice = computerPlay();
    const result = playRound(playerChoice, computerChoice);
    resultText.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${result}`;
  });
});
