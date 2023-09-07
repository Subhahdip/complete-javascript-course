'use strict';

let max = 20;
let min = 1;
let number = Math.floor(Math.random() * (max - min + 1) + min);
let score = 20;
let highScore = 0;
// console.log(number);

var checkValue = function () {
  if (document.querySelector('.guess').value === number) {
    if (score > highScore) {
      highScore = score;
    }
    document.querySelector('.number').textContent = number;
    document.body.style.background = 'lightgreen';
    document.querySelector('.message').textContent = 'Congratulations!!!!🎉🎉';
  } else {
    score--;
    document.querySelector('.message').textContent = 'Keep guessing...';
  }
};
