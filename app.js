let playerScore = 0,
            computerScore = 0;

        //playGame()
        
        function playRound(playerSelection, computerSelection){
            if(playerSelection ===  computerSelection){
                alert(`It's a tie! You chose ${playerSelection}, computer also chose ${computerSelection}. You: ${playerScore} Computer: ${computerScore}`);
            }
            else if(playerSelection === "rock"){
                if(computerSelection === "paper"){
                    computerScore++;
                    alert(`You lose! Paper beats rock! You: ${playerScore} Computer: ${computerScore}`);
                }
                else {
                    playerScore++;
                    alert(`You win! Rock beats scissors! You: ${playerScore} Computer: ${computerScore}`);
                }
            }
            else if(playerSelection === "paper"){
                if(computerSelection === "rock"){
                    playerScore++;
                    alert(`You win! Paper beats rock! You: ${playerScore} Computer: ${computerScore}`);
                }
                else {
                    computerScore++;
                    alert(`You lose! Scissors beat paper! You: ${playerScore} Computer: ${computerScore}`);
                }
            }
            else if(playerSelection === "scissors"){
                if(computerSelection === "paper"){
                    playerScore++;
                    alert(`You win! Scissors beat paper! You: ${playerScore} Computer: ${computerScore}`);
                }
                else {
                    computerScore++;
                    alert(`You lose! Rock beats scissors! You: ${playerScore} Computer: ${computerScore}`);
                }
            }   
        }

        function playGame(){
            playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
            computerSelection = getComputerChoice().toLocaleLowerCase();
            playRound(playerSelection, computerSelection);
    
            playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
            computerSelection = getComputerChoice().toLocaleLowerCase();
            playRound(playerSelection, computerSelection);

            playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
            computerSelection = getComputerChoice().toLocaleLowerCase();
            playRound(playerSelection, computerSelection);

            playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
            computerSelection = getComputerChoice().toLocaleLowerCase();
            playRound(playerSelection, computerSelection);

            playerSelection = prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
            computerSelection = getComputerChoice().toLocaleLowerCase();
            playRound(playerSelection, computerSelection);

            if (playerScore > computerScore){
                alert(`Congratulations! You won! You: ${playerScore} Computer: ${computerScore}`);
            } 
            
            else if (playerScore < computerScore) {
                alert(`You lost! Computer: ${computerScore} You: ${playerScore}`);
            }

            else {
                alert(`It's a tie! You: ${playerScore}, Computer: ${computerScore}`);
            }

    
        }

        function getComputerChoice(){
            let states = ["Rock", "Paper", "Scissors"];
            return states[Math.floor((Math.random() * states.length))];
        }

