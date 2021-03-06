let playerWon = 0;
let compWon = 0;
let pRoundStatus = "rounds";
let cRoundStatus = "rounds";

function computerPlay(){
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            alert("Error in computerPlay function.");
    }
}

function playRound(playerSelection, computerSelection){
    let playerChose = "You chose " + playerSelection + ", ";
    let compChose = "computer chose " + computerSelection + ". ";
    let result = "";
	
    if (playerSelection === "rock"){
        if (computerSelection === "rock"){
            result = "It's a draw.";
        }
        else if (computerSelection === "paper"){
            result = "Paper beats rock - you lose.";
            compWon++;
        }
        else if (computerSelection === "scissors"){
            result = "Rock beats scissors - you win.";
            playerWon++;
        }
        else{
            alert("Error in playRound function.");
        }
    }
	
    else if (playerSelection === "paper"){
        if (computerSelection === "rock"){
            result = "Paper beats rock - you win.";
            playerWon++;
        }
        else if (computerSelection === "paper"){
            result = "It's a draw.";
        }
        else if (computerSelection === "scissors"){
            result = "Scissors beats paper - you lose.";
            compWon++;
        }
        else{
            alert("Error in playRound function.");
        }
    }
	
    else if (playerSelection === "scissors"){
        if (computerSelection === "rock"){
            result = "Rock beats scissors - you lose.";
            compWon++;
        }
        else if (computerSelection === "paper"){
            result = "Scissors beats paper - you win.";
            playerWon++;
        }
        else if (computerSelection === "scissors"){
            result = "It's a draw.";
        }
        else{
            alert("Error in playRound function.");
        }
    }
	
    else{
        alert("Error in playRound function.");
    }
	
	if (playerWon === 1){
		pRoundStatus = "round";
	}
	else{
		pRoundStatus = "rounds";
	}
	if (compWon === 1){
		cRoundStatus = "round";
	}
	else{
		cRoundStatus = "rounds";
	}
    document.querySelector("h2").textContent = playerChose + compChose + result;
    //document.querySelector("h3").textContent = "You've won " + playerWon + " round(s). Computer has won " + compWon + " round(s).";
	document.querySelector("h3").textContent = "You've won " + playerWon + " " + pRoundStatus + ". Computer has won " + compWon + " " + cRoundStatus + ".";
	
    if (playerWon >= 5){
        document.querySelector("h1").textContent = "You won! Press any button to start again.";
    }
    if (compWon >= 5){
        document.querySelector("h1").textContent = "You lose. Press any button to start again.";
    }
}

function reset(){
    playerWon = 0;
    compWon = 0;
    document.querySelector("h3").textContent = "";
    document.querySelector("h2").textContent = "First to five wins";
    document.querySelector("h1").textContent = "Rock Paper Scissors";
}

document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", ()=>{
        if (playerWon < 5 && compWon < 5){
            playRound(button.value, computerPlay());
        }
        else{
            reset();
        }
    });
});
