
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
        let resultMessage = "";

        if (humanChoice === computerChoice) {
            resultMessage = `It's a tie! Both chose ${humanChoice}`;
        } else if (
            (humanChoice === 'rock' && computerChoice === 'scissors') ||
            (humanChoice === 'scissors' && computerChoice === 'paper') ||
            (humanChoice === 'paper' && computerChoice === 'rock')
        ) {
            resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
            humanScore++;
        } else {
            resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
            computerScore++;
        }
           
        console.log(resultMessage);
        console.log(`Current Scores - Human: ${humanScore}, Computer: ${computerScore}`);
        
        // Display results
        const result = document.querySelector("#result");
        result.textContent = resultMessage;

        runningScore = `Current Scores - Human: ${humanScore}, Computer: ${computerScore}`;

        document.getElementById("runningScore").textContent = runningScore;

        let finalMessage = "";

        if(humanScore === 5){
            finalMessage = 'You win!';
        }
        if(computerScore === 5){
            finalMessage = 'You lost the game!';
        }

        document.getElementById('final').textContent = finalMessage;
    }
        

    
    
const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");


rock.addEventListener("click", ()=>(playRound("rock")));
paper.addEventListener("click", ()=>(playRound("paper")));
scissors.addEventListener("click", ()=>(playRound("scissors")));


