// Create a function called getComputerChoice() that will randomly return one of the three choices
function getComputerChoice() {
    const computerChoice = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return computerChoice[randomNumber];
}

// Create a function that plays a round of rock, paper, scissors and returns a string that declares the winner like so "You Lose! Paper beats Rock"
function playRound(playerChoice, computerChoice) {


    switch (playerChoice + computerChoice) {
        case 'rockscissors':
        case 'paperrock':
        case 'scissorspaper':
            return 'win';
            break;
        case 'rockpaper':
        case 'paperscissors':
        case 'scissorsrock':
            return 'lose';
            break;
        case 'rockrock':
        case 'paperpaper':
        case 'scissorsscissors':
            return 'tie';
            break;
    }
}

// Make the function case-insensitive so users can input a choice how they want
// Use a prompt for user input
function playerInput() {
    let input = prompt('Type Rock, Paper or Scissors:');
    return input = input.toLowerCase();
}

let playerScore = 0;
let computerScore = 0;

// Create a function that runs the previous function 5 times, keeps score, and declares a winner(this function destroyed me)
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






