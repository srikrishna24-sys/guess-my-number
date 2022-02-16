'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1; //secret number
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    //if guess is falsy
    document.querySelector('.message').textContent = '😒 no score dumbass';
  } else if (guess === secretnumber) {
    document.querySelector('.number').textContent = secretnumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent =
      '🎉🎉YOU WON MY FRIEND🎆🎇';
    document.querySelector('body').style.backgroundColor = '#60b347'; //instead of bacground-color we write this way for all css properties
    document.querySelector('.number').style.width = '40rem';
  } else if (guess > secretnumber) {
    if (score > 0) {
      document.querySelector('.message').textContent =
        'too high😂 🐱‍🚀🐱‍👓👏';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'you lost loser😂🐱‍🚀🤣🤣😁😂😂😢😢';
    }
  } else if (guess < secretnumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = 'too low😂 bot';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'you lost loser😂🐱‍🚀🤣🤣😁😂😂😢😢';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'start guessing. . .';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
});
