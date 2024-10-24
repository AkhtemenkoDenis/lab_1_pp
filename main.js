function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function updateFeedback(message) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.style.opacity = 0;
  setTimeout(() => {
    feedback.style.opacity = 1;
  }, 100);
}

function animateCorrectGuess() {
  confetti({
    particleCount: 1000,
    startVelocity: 40,
    spread: 360,
    gravity: 0.5,
    ticks: 60,
    origin: { x: 0.5, y: 0.5 }
  });
}

let secretNumber = getRandomNumber(1, 100);
let attempts = 0;

const guessButton = document.getElementById('guessButton');
const guessInput = document.getElementById('guessInput');
const resetButton = document.getElementById('resetButton');

guessButton.addEventListener('click', makeGuess);
guessInput.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    makeGuess();
  }
});
resetButton.addEventListener('click', resetGame);

function makeGuess() {
  const userGuess = Number(guessInput.value);
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    updateFeedback('🚫 Введіть число від 1 до 100 🚫');
    return;
  }
  attempts++;

  if (userGuess === secretNumber) {
    updateFeedback(`✨🎈🎉 Вітаємо! Ви вгадали число ${secretNumber} за ${attempts} спроб 🎉🎈✨`);
    animateCorrectGuess();
    guessButton.disabled = true;
    guessInput.disabled = true;
  } else if (userGuess > secretNumber) {
    updateFeedback(`📉👀 Загадане число менше ${userGuess}.`);
  } else {
    updateFeedback(`📈👀 Загадане число більше ${userGuess}.`);
  }

  guessInput.value = '';
  guessInput.focus();
}

function resetGame() {
  secretNumber = getRandomNumber(1, 100);
  attempts = 0;
  updateFeedback('Нова гра розпочата! Введіть число.');
  guessButton.disabled = false;
  guessInput.disabled = false;
  guessInput.value = '';
  guessInput.focus();
}
