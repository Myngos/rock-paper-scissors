function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()*choices.length);

    return choices[randomIndex];
}
console.log(getComputerChoice());

// getting human choice 
function getHumanChoice(){
    const validChoices = ['rock','paper','scissors'];

    let humanChoice = prompt('Rock, Paper or Scissors').toLowerCase();

    while(!validChoices.includes(humanChoice)){
        humanChoice = prompt('Invalid choice try again');
    }

    return humanChoice;
}

console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice===computerChoice){
        console.log('Play again!');

    }else if(humanChoice ==='rock' && computerChoice==='paper') {
        console.log('You lose! Paper beats rock! ');
        computerScore += 1;
        
    }
    
}