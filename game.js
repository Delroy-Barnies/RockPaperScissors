
function getComputerChoice(){

    let options = ["rock", "paper", "scissors"];
    let randomNumber = Math.floor(Math.random() * options.length);
    return options[randomNumber];
}

function startRound(playerSelection, computerSelection){

    if (playerSelection == "rock" && computerSelection == "scissors"){
        return "you win this round, rock beats scissors!";
    }

    else if (playerSelection == "paper" && computerSelection == "rock"){
        return "you win this round, paper beats rock!";
    }

    else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "you win this round, scissors beats paper!";
    }

    else if (computerSelection == "rock" && playerSelection == "scissors"){
        return "computer wins this round, rock beats scissors!";
    }

    else if (computerSelection == "paper" && playerSelection == "rock"){
        return "computer wins this round, paper beats rock!";
    }

    else if (computerSelection == "scissors" && playerSelection == "paper"){
        return "computer wins this round, scissors beats paper!";
    }

    else{
        return "It's a tie!";
    }
}

function game(){

    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){

        let playerChoice =  prompt("Enter your weapon of choice (rock, paper or scissors)")
        playerChoice = playerChoice.toLowerCase();

        while (!(playerChoice =="rock" || playerChoice == "paper" || playerChoice == "scissors")){
            playerChoice =  prompt("please enter a correct option (rock, paper or scissors)");
        }  

        let roundWinner = startRound(playerChoice, getComputerChoice());
        console.log(roundWinner);
        playerScore += updatePlayerScore(roundWinner, playerScore);
        computerScore += updateComputerScore(roundWinner, computerScore);

        console.log(playerScore);
        console.log(computerScore);
    }

    if(playerScore > computerScore){
        return "you win!";
    }
    else if(playerScore < computerScore){
        return "computer wins!";
    }
    else{
        return "It's a tie!";
    }
}

function updatePlayerScore(roundWinner, playerScore){

    if(roundWinner == "you win this round, rock beats scissors!" || roundWinner == "you win this round, paper beats rock!" || 
       roundWinner == "you win this round, scissors beats paper!"){
        return 1;
    }
    else{
        return 0;
    }
}

function updateComputerScore(roundWinner, computerScore){

    if(roundWinner == "computer wins this round, rock beats scissors!" || roundWinner == "computer wins this round, paper beats rock!" ||
       roundWinner == "computer wins this round, scissors beats paper!"){
        return 1;
                        }
    else{
        return 0;
    }
}

console.log(game());