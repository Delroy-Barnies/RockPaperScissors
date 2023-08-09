function getComputerChoice() {

    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function displayComputerChoice(computerChoice) {

    if (computerChoice == "rock") {
        let displayComputerPick = document.querySelector('.computer_rock');
        displayComputerPick.setAttribute('style', 'background: red;');
    }
    else if (computerChoice == "scissors") {
        let displayComputerPick = document.querySelector('.computer_scissors');
        displayComputerPick.setAttribute('style', 'background: red;');
    }
    else {
        let displayComputerPick = document.querySelector('.computer_paper');
        displayComputerPick.setAttribute('style', 'background: red;');
    }
}

function resetComputerColors() {
    let displayComputerRock = document.querySelector('.computer_rock');
    displayComputerRock.setAttribute('style', 'background: white;');

    let displayComputerPaper = document.querySelector('.computer_paper');
    displayComputerPaper.setAttribute('style', 'background: white;');

    let displayComputerScissors = document.querySelector('.computer_scissors');
    displayComputerScissors.setAttribute('style', 'background: white;');
}

function resetPlayerColors() {
    let playerRock = document.getElementById('player_rock')
    playerRock.setAttribute('style', 'background: white;');

    let playerPaper = document.getElementById('player_paper')
    playerPaper.setAttribute('style', 'background: white;');

    let playerScissors = document.getElementById('player_scissors')
    playerScissors.setAttribute('style', 'background: white;');
}

function startRound(playerSelection, computerSelection) {

    if (playerSelection == "rock" && computerSelection == "scissors") {
        return "you win this round, Ishi beats Hasami!";
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "you win this round, Kami beats Ishi!";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "you win this round, Hasami beats Kami!";
    }

    else if (computerSelection == "rock" && playerSelection == "scissors") {
        return "Emperor wins this round, Ishi beats Hasami!";
    }

    else if (computerSelection == "paper" && playerSelection == "rock") {
        return "Emperor wins this round, Kami beats Ishi!";
    }

    else if (computerSelection == "scissors" && playerSelection == "paper") {
        return "Emperor wins this round, Hasami beats Kami!";
    }

    else {
        return "It's a tie!";
    }
}

// main function for starting the game 
function game() {

    let playerScore = 0;
    let computerScore = 0;
    let resultsMessage = document.querySelector('.results');
    let displayPlayerScore = document.querySelector('.player_score');
    let displayComputerScore = document.querySelector('.emperor_score');


    let playerRock = document.getElementById('player_rock').onclick = function () {

        resetComputerColors();
        resetPlayerColors();
        let computerChoice = getComputerChoice();
        let roundWinner = startRound('rock', computerChoice);
        this.setAttribute('style', 'background: blue');
        displayComputerChoice(computerChoice);

        resultsMessage.textContent = roundWinner;
        resultsMessage.setAttribute('style', 'font-size: 30px; width: 200px;')

        playerScore += updatePlayerScore(roundWinner, playerScore);
        computerScore += updateComputerScore(roundWinner, computerScore);

        displayPlayerScore.textContent = playerScore;
        displayComputerScore.textContent = computerScore;

        if (playerScore == 5 || computerScore == 5) {
            let winner = checkForWinner(playerScore, computerScore);
            resultsMessage.textContent = winner;
            resultsMessage.setAttribute('style', 'font-size: 30px; width: 200px;');

            playerScore = 0;
            computerScore = 0;
        }

    }

    let playerScissors = document.getElementById('player_scissors').onclick = function () {

        resetPlayerColors();
        resetComputerColors();
        let computerChoice = getComputerChoice();
        let roundWinner = startRound('scissors', computerChoice);
        this.setAttribute('style', 'background: blue');
        displayComputerChoice(computerChoice);

        resultsMessage.textContent = roundWinner;
        resultsMessage.setAttribute('style', 'font-size: 30px; width: 200px;')
        playerScore += updatePlayerScore(roundWinner, playerScore);
        computerScore += updateComputerScore(roundWinner, computerScore);

        displayPlayerScore.textContent = playerScore;
        displayComputerScore.textContent = computerScore;

        if (playerScore == 5 || computerScore == 5) {
            let winner = checkForWinner(playerScore, computerScore);
            resultsMessage.textContent = winner;
            resultsMessage.setAttribute('style', 'font-size: 30px; width: 200px;');

            playerScore = 0;
            computerScore = 0;
        }


    }

    let playerPaper = document.getElementById('player_paper').onclick = function () {

        resetPlayerColors();
        resetComputerColors();
        let computerChoice = getComputerChoice();
        let roundWinner = startRound('paper', computerChoice);
        this.setAttribute('style', 'background: blue');
        displayComputerChoice(computerChoice);

        resultsMessage.textContent = roundWinner;
        resultsMessage.setAttribute('style', 'font-size: 30px; width: 200px;')
        playerScore += updatePlayerScore(roundWinner, playerScore);
        computerScore += updateComputerScore(roundWinner, computerScore);

        displayPlayerScore.textContent = playerScore;
        displayComputerScore.textContent = computerScore;

        if (playerScore == 5 || computerScore == 5) {
            let winner = checkForWinner(playerScore, computerScore);
            resultsMessage.textContent = winner;
            resultsMessage.setAttribute('style', 'font-size: 30px; width: 200px;');

            playerScore = 0;
            computerScore = 0;
        }


    }
}

function checkForWinner(playerScore, computerScore) {

    if (playerScore == 5 && computerScore < 5) {
        return "You saved us all!";
    }
    if (computerScore == 5 && playerScore < 5) {
        return "Oh no! Emperor wins. Who will save us now?";
    }
    if (playerScore == 5 && computerScore == 5) {
        return "Its a tie?! Perhaps another game will decide this.";
    }
}

function updatePlayerScore(roundWinner, playerScore) {

    if (roundWinner == "you win this round, Ishi beats Hasami!" || roundWinner == "you win this round, Kami beats Ishi!" ||
        roundWinner == "you win this round, Hasami beats Kami!") {
        return 1;
    }
    else {
        return 0;
    }
}

function updateComputerScore(roundWinner, computerScore) {

    if (roundWinner == "Emperor wins this round, Ishi beats Hasami!" || roundWinner == "Emperor wins this round, Kami beats Ishi!" ||
        roundWinner == "Emperor wins this round, Hasami beats Kami!") {
        return 1;
    }
    else {
        return 0;
    }
}

console.log(game());
