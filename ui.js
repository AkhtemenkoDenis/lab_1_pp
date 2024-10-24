export function updateFeedback(message) {
  const feedback = document.getElementById('feedback');
  feedback.textContent = message;
  feedback.style.opacity = 0;
  setTimeout(() => {
    feedback.style.opacity = 1;
  }, 100);
}

export function animateCorrectGuess() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { y: 0.6 }
  });
}
