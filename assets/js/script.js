 // Declare constants outside of any block
 const symbolAmounts = {
  '⭐': 10,
  '❤️': 20,
  '⚡': 30,
  '✨': 40,
  '☘️': 50,
  '🍀': 60,
  '🎲': 70,
  '🍒': 80,
  '🍎': 90,
  '🍇': 100
};
const spinDuration = 2000; // Total duration of spinning animation in milliseconds

// Check if symbols variable is already declared
if (typeof symbols === 'undefined') {
  // Define symbols variable only if it's not already defined
  const symbols = ['⭐', '❤️', '⚡', '✨', '☘️', '🍀', '🎲', '🍒', '🍎', '🍇'];
}

let balance = 100;

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
        const symbol = symbolsArray[1];
        const prize = symbolAmounts[symbol];
        showJackpotPopup(prize);
        balance += prize;
        updateBalance();
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

function showJackpotPopup(prize) {
  // Display your popup message or image here
  alert(`Congratulations! You won $${prize}!`);
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

function updateBalance() {
  document.getElementById('balance').textContent = balance;
}

document.addEventListener('DOMContentLoaded', () => {
  populateReels(); // Populate reels with initial symbols
});

document.getElementById('spinButton').addEventListener('click', () => {
  const betAmount = parseInt(document.getElementById('betAmount').value);
  if (betAmount > balance) {
    alert("You don't have enough balance!");
    return;
  }
  spin(); // Start spinning the reels
  balance -= betAmount; // Deduct bet amount from balance
  updateBalance(); // Update balance display
  setTimeout(() => {
    if (checkForWin()) {
      // The win is handled within spinReel function
    } else {
      alert('Better luck next time!');
    }
  }, spinDuration + 100); // Wait for the spinning animation to finish before checking for a win
});