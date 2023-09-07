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
  } else {
    score--;
    document.querySelector('.message').textContent =
      guess > number ? 'Too high. Try again!' : 'Too low. Try again!';
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.btn.check').addEventListener('click', checkValue);
