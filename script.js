'use strict';
// Variable
const inputField = document.querySelector('.input-guess');
const btn = document.querySelector('.btn');
const hintText = document.querySelector('.hint-text');
const moves = document.querySelector('.moves');
const winNum = document.querySelector('.win-num');
const win = document.querySelector('.win');
const randomNumber = Math.floor(Math.random() * 20) + 1;
const time = 5000; // 5s

const year = document.querySelector('.year');

const currentDate = new Date().getFullYear();

year.innerHTML = currentDate;

winNum.innerHTML = randomNumber;
hintText.textContent = '';
let sum = 0;

// Function

const clearInput = () => (inputField.value = '');
const checkNum = (num, rand) => {
  if (num === rand) {
    win.classList.toggle('hidden');
    moves.innerHTML = sum;
    hintText.textContent = 'No more hints. You win';
    setTimeout(() => location.reload(), time); // Restart game when player win
  }
  if (num < rand) {
    hintText.textContent = 'Less than the guessed number';
  }
  if (num > rand) {
    hintText.textContent = 'More than the guessed number';
  }
};

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
    clearInput();
  } else {
    checkNum(number, randomNumber);
    clearInput();
  }
};

//Event
btn.addEventListener('click', guessTheNumber);
