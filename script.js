function getComputerChoice(){

    const choices = ["rock", "paper", "scissors"];//choices the computer can make

    const randomChoice = Math.floor(Math.random()*choices.length);

    return choices[randomChoice];
}

console.log(getComputerChoice());