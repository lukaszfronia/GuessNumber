'use strict';
// Variable
const inputField = document.querySelector('.input-guess');
const btn = document.querySelector('.btn');
const hintText = document.querySelector('.hint-text');
const moves = document.querySelector('.moves');
const winNum = document.querySelector('.win-num');
const win = document.querySelector('.win');
const randomNumber = Math.floor(Math.random() * 20) + 1;

winNum.innerHTML = randomNumber;
hintText.textContent = '';
let sum = 0;

// Function

const guessTheNumber = e => {
  e.preventDefault();
  const number = +inputField.value;
  sum++;

  if (
    inputField.value === '' ||
    inputField.value > 20 ||
    inputField.value < 0
  ) {
    hintText.textContent = `${
      inputField.value === ''
        ? 'Please insert a number'
        : 'Please insert number between 1 - 20'
    }`;
    inputField.value = '';
  } else {
    if (number === randomNumber) {
      win.classList.toggle('hidden');
      moves.innerHTML = sum;
      hintText.textContent = 'No more hints. You win';
      inputField.value = '';
    }
    if (number < randomNumber) {
      hintText.textContent = 'Less than the guessed number';
      inputField.value = '';
    }
    if (number > randomNumber) {
      hintText.textContent = 'More than the guessed number';
      inputField.value = '';
    }
  }
};

//Event
btn.addEventListener('click', guessTheNumber);
