// you can write js here
console.log('exo-3');
let userInput = prompt('rock, paper or scissors ?').toLowerCase()

function getUserChoice(userInput) {
    if (userInput == 'rock' || userInput == 'paper' || userInput == 'scissors' || userInput == 'bomb') {
        return userInput;
    }
    else {
        console.log('erreur : saisie incorrecte');
        return false;
    }
}

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    // console.log(number);
    if (number === 0) {
        computerChoice = 'rock';
    }
    else if (number === 1) {
        computerChoice = 'paper';
    }
    else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === 'bomb') {
        return 'Won';
    }
    else if (userChoice === computerChoice) {
        return 'Tied';
    }
    else if (userChoice === 'rock') {
        if (computerChoice === 'scissors') {
            return 'Won';
        }
        else {
            return 'Lost';
        }
    }
    else if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Lost';
        }
        else {
            return 'Won';
        }
    }
    else {
        if (computerChoice === 'paper') {
            return 'Won';
        }
        else {
            return 'Lost';
        }
    }
}

function playGame() {
    let userChoice = getUserChoice(userInput);
    let computerChoice = getComputerChoice();
    
    if (userChoice){
    console.log("Your choice : " + userChoice);
    console.log("Computer's choice : " + computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame();
