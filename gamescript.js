
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const gamebutton = document.querySelector('.gamebutton');
const guessField = document.querySelector('.guessField');
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Прошлые числа: ';
  }

  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Великолепно! Вы угадали!';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = 'Игра Окончена! Вы не справились';
    lowOrHi.textContent = '';
    setGameOver();
  } else {
    lastResult.textContent = 'Неудача!';
    lastResult.style.backgroundColor = 'red';
    if(userGuess < randomNumber) {
      lowOrHi.textContent = 'Прошлое число МЕНЬШЕ загаданного' ;
    } else if(userGuess > randomNumber) {
      lowOrHi.textContent = 'Прошлое число БОЛЬШЕ загаданного';
    }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}

gamebutton.addEventListener('click', checkGuess);

function setGameOver() {
  guessField.disabled = true;
  gamebutton.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Начать новую игру';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll('.resultParas p');
  for (const resetPara of resetParas) {
    resetPara.textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  gamebutton.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
