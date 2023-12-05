let playerScore = 0,
    computerScore = 0;
     
const playerScoreText = document.querySelector('#user-score');
const computerScoreText = document.querySelector('#computer-score');
const content = document.querySelector('#content');
const infoText = document.querySelector('#info-text');
const restartGame = document.querySelector('#restart-game');

    
        playGame();



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
            if(isGameOver()){
                const buttons = document.querySelector('#buttons').children;
                for(let button of buttons){
                    button.disabled = 'disabled';
                }
            }
        }

        function playGame(){
            addEventListeners();
        }

        function getComputerChoice(){
            let states = ["Rock", "Paper", "Scissors"];
            return states[Math.floor((Math.random() * states.length))];
        }

        function updateScores() {
            playerScoreText.textContent = playerScore;
            computerScoreText.textContent = computerScore;
        }

        function isGameOver() {
            if (playerScore == 5){
                const restartButton = document.createElement('button');
                infoText.textContent = (`Congratulations! You won the game!`);
                restartButton.textContent = 'Restart Game';
                restartButton.style = "margin-top: 20px";
                restartGame.appendChild(restartButton);

                restartButton.addEventListener('click', () => {
                    window.location.reload();
                })

                return true;
            } 
            
            else if (computerScore == 5) {
                infoText.textContent = (`You lost the game!`);
                const restartButton = document.createElement('button');
                restartButton.textContent = 'Restart Game';
                restartButton.style = "margin-top: 20px";
                restartGame.appendChild(restartButton);
                restartButton.addEventListener('click', () => {
                    window.location.reload();
                });

                return true;
            }
        }
/*
  butonları dom olarak al
  button listener'ları ekle ve player choice'ları güncelle
  ekrana sonucu yazdır
*/