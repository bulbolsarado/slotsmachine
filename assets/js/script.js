const symbols = ['⭐', '❤️', '⚡', '✨', '☘️', '🍀', '🎲', '🍒', '🍎', '🍇'];
const spinDuration = 2000; // Total duration of spinning animation in milliseconds

function getRandomSymbol() {
  return symbols[Math.floor(Math.random() * symbols.length)];
}

function populateReels() {
  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => {
    reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
  });
}

function spinReel(reel) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;

    if (elapsedTime >= spinDuration) {
      reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
      const symbolsArray = reel.textContent.split('\n');
      if (symbolsArray[1] === symbolsArray[4] && symbolsArray[1] === symbolsArray[7]) {
        alert('Congratulations! You won a jackpot prize!');
      }
    } else {
      const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
      const randomSymbol = symbols[randomSymbolIndex];
      reel.textContent = getRandomSymbol() + "\n" + randomSymbol + "\n" + getRandomSymbol();
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

function checkForWin() {
  const reels = document.querySelectorAll('.reel');
  let hasMatch = true;
  reels.forEach(reel => {
    const symbolsArray = reel.textContent.split('\n');
    if (symbolsArray[1] !== symbolsArray[4] || symbolsArray[1] !== symbolsArray[7]) {
      hasMatch = false;
    }
  });
  return hasMatch;
}

function spin() {
  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => {
    spinReel(reel);
  });
}

document.getElementById('spinButton').addEventListener('click', () => {
  populateReels(); // Populate reels with initial symbols
  spin(); // Start spinning the reels
  setTimeout(() => {
    if (checkForWin()) {
      alert('Congratulations! You won a jackpot prize!');
    }
  }, spinDuration + 100); // Wait for the spinning animation to finish before checking for a win
});
