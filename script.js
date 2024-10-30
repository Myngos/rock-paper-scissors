
let humanScore = 0;
let computerScore = 0;

// Get the computer's choice
function getComputerChoice() {
    const choice = ['Rock', 'Paper', 'Scissors'];
    const randomIndex = Math.floor(Math.random() * choice.length);
    return choice[randomIndex];
}

// Get the human's choice
function getHumanChoice() {
    const validChoices = ['rock', 'paper', 'scissors'];
    let humanChoice = prompt('Rock, Paper or Scissors?').toLowerCase();

    while (!validChoices.includes(humanChoice)) {
        humanChoice = prompt('Invalid choice, try again').toLowerCase();
    }

    return humanChoice;
}


    function playRound(humanChoice) {
        const computerChoice = getComputerChoice().toLowerCase();

        if (humanChoice === computerChoice) {
            console.log(`It's a tie! Both chose ${humanChoice}`);
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore++;
        } else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    // // Display final scores
    // console.log(`Final Scores - Human: ${humanScore}, Computer: ${computerScore}`);
    
    // if (humanScore > computerScore) {
    //     console.log("You win the game!");
    // } else if (computerScore > humanScore) {
    //     console.log("You lose the game!");
    // } else {
    //     console.log("The game is a tie!");
    // }

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", ()=>(playRound("rock")));
paper.addEventListener("click", ()=>(playRound("paper")));
scissors.addEventListener("click", ()=>(playRound("scissors")));

