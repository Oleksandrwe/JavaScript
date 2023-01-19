 

//do game through listeners
const button = document.querySelectorAll ('.button');

button.forEach((button) => {
  button.addEventListener('click', function () {
  const pInput = this.value;
  const cOptions = ['rock', 'paper', 'scissors'];
  const cInput = cOptions[Math.floor(Math.random() * 3)];

  compareInputs(pInput, cInput);
  updateScore();

  if (checkWinner()) {
    pScore = cScore = 0;
    updateScore();
  }

});
});


function compareInputs(pInput, cInput) {
  const currentMatch = `${pInput} vs ${cInput}`;

  // Tie check
  if (pInput === cInput) {
    alert(`${currentMatch} is a Tie`);
    return;
  }

  // Rock
  if (pInput === 'rock') {
    if (cInput === 'scissors') {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  // Paper
  else if (pInput === 'paper') {
    if (cInput === 'rock') {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
  // Scissors
  else if (pInput === 'scissors') {
    if (cInput === 'paper') {
      alert(`${currentMatch} = You Win`);
      pScore++;
    } else {
      alert(`${currentMatch} = Computer Wins`);
      cScore++;
    }
  }
}

//Score

let pScore = 0;
let cScore = 0;

//updateScore
function updateScore() {
  document.getElementById("p-score").textContent = pScore;
  document.getElementById("c-score").textContent = cScore;
}



function checkWinner() {
  if (pScore === 5 || cScore === 5) {
    const winner =
      pScore === 5
        ? "You win the game! Congratulations!"
        : "Computer wins the game! Try again next time!";
    alert(winner);
    return true;
  }
  return false;
}

