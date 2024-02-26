// Create a function called getComputerChoice() that will randomly return one of the three choices
function getComputerChoice() {
  const computerChoice = ['rock', 'paper', 'scissors'];
  const randomNumber = Math.floor(Math.random() * 3);
  return computerChoice[randomNumber];
}

let playerScore = 0;
let computerScore = 0;
let ties = 0;
let rockButton = document.querySelector('#rock');
let paperButton = document.querySelector('#paper');
let scissorsButton = document.querySelector('#scissors');
let results = document.querySelector('.results');
let resultCounter = document.createElement('span');
resultCounter.textContent = `Wins: ${playerScore}; Losses: ${computerScore}; Ties: ${ties};`;
results.appendChild(resultCounter);

function playerPicksRock() {
  let computerChoice = getComputerChoice();

  if (computerChoice === 'rock') {
    return (resultCounter.textContent = `Wins: ${playerScore}; Losses: ${computerScore}; Ties: ${ties++};`);
  } else if (computerChoice === 'paper') {
    return (resultCounter.textContent = `Wins: ${playerScore}; Losses: ${computerScore++}; Ties: ${ties};`);
  } else {
    return (resultCounter.textContent = `Wins: ${playerScore++}; Losses: ${computerScore}; Ties: ${ties};`);
  }
}

function playerPicksPaper() {
  let computerChoice = getComputerChoice();

  if (computerChoice === 'rock') {
    return (resultCounter.textContent = `Wins: ${playerScore++}; Losses: ${computerScore}; Ties: ${ties};`);
  } else if (computerChoice === 'paper') {
    return (resultCounter.textContent = `Wins: ${playerScore}; Losses: ${computerScore}; Ties: ${ties++};`);
  } else {
    return (resultCounter.textContent = `Wins: ${playerScore}; Losses: ${computerScore++}; Ties: ${ties};`);
  }
}

function playerPicksScissors() {
  let computerChoice = getComputerChoice();

  if (computerChoice === 'rock') {
    return (resultCounter.textContent = `Wins: ${playerScore}; Losses: ${computerScore++}; Ties: ${ties};`);
  } else if (computerChoice === 'paper') {
    return (resultCounter.textContent = `Wins: ${playerScore++}; Losses: ${computerScore}; Ties: ${ties};`);
  } else {
    return (resultCounter.textContent = `Wins: ${playerScore}; Losses: ${computerScore}; Ties: ${ties++};`);
  }
}

rockButton.addEventListener('click', playerPicksRock);
paperButton.addEventListener('click', playerPicksPaper);
scissorsButton.addEventListener('click', playerPicksScissors);

// Create a function that runs the previous function 5 times, keeps score, and declares a winner(this function destroyed me)
/*
function playGame() {
    while (playerScore < 5 && computerScore < 5) {
        let playerChoice = playerInput();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);


        if (result === 'win') {
            playerScore++;
            console.log(`You picked ${playerChoice}, computer picked ${computerChoice}.\n You won this round, you have ${playerScore} points, computer has ${computerScore} points.`)
        }   else if (result === 'tie') {
            console.log(`You picked ${playerChoice}, computer picked ${computerChoice}.\n Tie.`);
        }   else if (result === 'lose') {
            computerScore++;
            console.log(`You picked ${playerChoice}, computer picked ${computerChoice}.\n You lost this round, you have ${playerScore} points, computer has ${computerScore} points.`)
        }   else {
            console.log('Invalid input, please try again.');
        }
    }

    if (playerScore === 5) {
        console.log('You won the game! Congratulations!');
    }   else if (computerScore === 5) {
        console.log('You lost. Try again.')
    }

}

playGame();
*/
