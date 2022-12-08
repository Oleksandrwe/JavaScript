  
   //Computer choice
   
   function getComputerChoice() {
      const random = (Math.floor(Math.random() * 3));
    
      switch (random) {
        
        case 0:
         return('rock')
          break;
        case 1:
          return('paper')
          break;
      
          case 2:
            return ('scissors')
          break;
      
        default:
          // execute default code block
      }
    
    
    }


   
//Specifies round win/game win messages
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"

 //Plays one round of RPS
    function playSingleRound(playerSelection, computerSelection) {
     
      if (computerSelection == playerSelection) {
        return draw;
      
      } else if (computerSelection == 'paper' && playerSelection === 'rock') {
        return computerWinRound;
      
      } else if (computerSelection == 'paper' && playerSelection === 'scissors') {
        return playerWinRound;
      
      } else if (computerSelection == 'scissors' && playerSelection === 'rock') {
        return playerWinRound;
      
      } else if (computerSelection == 'scissors' && playerSelection === 'paper') {
        return computerWinRound;
      
      } else if (computerSelection == 'rock' && playerSelection === 'scissors') {
        return computerWinRound;
      
      } else if (computerSelection == 'rock' && playerSelection === 'paper') {
        return playerWinRound;
      
      
      }else {
        return `You lose! ${computerSelection} beats ${playerSelection}`;
      }
    
      }

  
    
      const playerSelection = prompt('Please enter one of the following simbols (Rock, Paper or Scissors): ').toLowerCase();
      const computerSelection = getComputerChoice();
      let playerScore = 0;
      let computerScore = 0;
      let draws = 0;
      
    
// Full game of 5 rounds
   function game () {

    for (let i = 0; i < 5; i++) {
      
        const playerSelection = prompt('Please enter one of the following simbols (Rock, Paper or Scissors): ').toLowerCase();
        const computerSelection = getComputerChoice();
        let roundResult = playSingleRound(playerSelection, computerSelection);
  console.log(roundResult);
  gameScore(roundResult);
  console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);
   
    }     
  
}

   game ();


//Keeps score and prints out correct messages based on score

let result = playSingleRound ();

function gameScore (result) {


  if (result === playerWinRound) {
(playerScore++);

  }else if (result === computerWinRound ) {
     (computerScore++);

}else if (result === draw) {
   draws++;
  
}else {
  (draws++);

}

}

gameScore (result);

function showWinner () {

  if (playerScore > computerScore) {

    return playerWin;
  
  }else if (computerScore > playerScore) {
      return computerWin;
  
  }else {
    return draw;
  }
}

showWinner ();
console.log (showWinner ());