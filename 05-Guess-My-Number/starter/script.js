'use strict';

let max = 20;
let min = 1;
let number = Math.floor(Math.random() * (max - min + 1) + min);
let score = 20;
let highScore = 0;
console.log(number);
var checkValue = function () {
  const guess = parseInt(document.querySelector('.guess').value);

  if (guess === number) {
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.number').textContent = number;
    document.body.style.background = 'lightgreen';
    document.querySelector('.message').textContent = 'Congratulations!!!!🎉🎉';
    document.querySelector('.highscore').textContent = highScore;
  } else {
    score--;
    document.querySelector('.message').textContent =
      guess > number ? 'Too high. Try again!' : 'Too low. Try again!';
    document.querySelector('.score').textContent = score;
    if (score === 0) {
      document.querySelector('.message').textContent =
        'Game Over!!❌❌ Please Try Again';
      document.querySelector('.btn.check').disabled = true;
    }
  }
};

document.querySelector('.btn.check').addEventListener('click', checkValue);
document.querySelector('.btn.again').addEventListener('click', function () {
  window.location.reload();
});
