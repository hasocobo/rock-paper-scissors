let playerScore = 0,
    computerScore = 0;
     
const playerScoreText = document.querySelector('#user-score');
const computerScoreText = document.querySelector('#computer-score');
const content = document.querySelector('#content');
const infoText = document.querySelector('#info-text');

    
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
                infoText.textContent = `It's a tie! You chose ${playerSelection}, computer also chose ${computerSelection}.`;
            }
            else if(playerSelection === "rock"){
                if(computerSelection === "paper"){
                    computerScore++;
                    infoText.textContent = `You lose! Paper beats rock!`;
                }
                else {
                    playerScore++;
                    infoText.textContent = `You win! Rock beats scissors!`;
                }
            }
            else if(playerSelection === "paper"){
                if(computerSelection === "rock"){
                    playerScore++;
                    infoText.textContent = `You win! Paper beats rock!`;
                }
                else {
                    computerScore++;
                    infoText.textContent = `You lose! Scissors beat paper!`;
                }
            }
            else if(playerSelection === "scissors"){
                if(computerSelection === "paper"){
                    playerScore++;
                    infoText.textContent = `You win! Scissors beat paper!`;
                }
                else {
                    computerScore++;
                    infoText.textContent = `You lose! Rock beats scissors!`;
                }
            }
            
            updateScores();
        }

        function playGame(){
            playRound(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);
            playRound(playerSelection, computerSelection);

            if (playerScore > computerScore){
                infoText.textContent = (`Congratulations! You won! You: ${playerScore} Computer: ${computerScore}`);
            } 
            
            else if (playerScore < computerScore) {
                infoText.textContent = (`You lost! Computer: ${computerScore} You: ${playerScore}`);
            }

            else {
                infoText.textContent = (`It's a tie! You: ${playerScore}, Computer: ${computerScore}`);
            }

    
        }

        function getComputerChoice(){
            let states = ["Rock", "Paper", "Scissors"];
            return states[Math.floor((Math.random() * states.length))];
        }

        function updateScores() {
            playerScoreText.textContent = playerScore;
            computerScoreText.textContent = computerScore;
        }

/*
  butonları dom olarak al
  button listener'ları ekle ve player choice'ları güncelle
  ekrana sonucu yazdır
*/