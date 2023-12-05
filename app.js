let playerScore = 0,
    computerScore = 0;
     
    
        addEventListeners();

        function addEventListeners(){
            let playerChoice = "";
            const buttons = document.querySelectorAll('button');
            for(let button of buttons){
                button.addEventListener('click', () => {
                    playerChoice = button.textContent.toLocaleLowerCase();
                    computerChoice = getComputerChoice().toLocaleLowerCase();
                    playRound(playerChoice, computerChoice);
                })
            }
        }


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
            playRound(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
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

/*
  butonları dom olarak al
  button listener'ları ekle ve player choice'ları güncelle
  ekrana sonucu yazdır
*/