'use strict';

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  displayMessage('❓ Start guessing...');
  document.querySelector('.guess').value = null;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When There is no input
  if (!guess) {
    displayMessage('🔞 You forgot the Number');

    //When the player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉🎈Correct Number 🎈🎉');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#32CD32';
    document.querySelector('.number').style.width = '30rem';

    //Log the highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('🍭 You Lose Sucker');
      document.querySelector('.score').textContent = 0;
    }
  }
});
