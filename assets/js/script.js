// // JavaScript code goes here
// const symbols = ['⭐', '❤️', '⚡', '✨', '☘️', '🍀', '🎲', '🍒', '🍎', '🍇'];
// const symbolAmounts = {
//   '⭐': 10,
//   '❤️': 20,
//   '⚡': 30,
//   '✨': 40,
//   '☘️': 50,
//   '🍀': 60,
//   '🎲': 70,
//   '🍒': 80,
//   '🍎': 90,
//   '🍇': 100
// };
// let balance = 100;
// const spinDuration = 2000;

// function getRandomSymbol() {
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// function populateReels() {
//   const reels = document.querySelectorAll('.reel');
//   reels.forEach(reel => {
//     reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
//   });
// }
// function populateReels() {
//   const reels = document.querySelectorAll('.reel');
//   reels.forEach(reel => {
//     const randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
//     reel.style.backgroundImage = `url(${randomSymbol})`;
//     reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
//   });
// }

// function showJackpotPopup(prize) {
//   balance += prize; // Add the prize amount to the balance
//   updateBalance(); // Update balance display
//   alert(`Congratulations! You won $${prize}! Your balance is now $${balance}.`);
// }


// // function spinReel(reel) {
// //   let startTime = null;

// //   function step(timestamp) {
// //     if (!startTime) startTime = timestamp;
// //     const elapsedTime = timestamp - startTime;

// //     if (elapsedTime >= spinDuration) {
// //       reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
// //       const symbolsArray = reel.textContent.split('\n');
// //       if (symbolsArray[1] === symbolsArray[4] && symbolsArray[1] === symbolsArray[7]) {
// //         const symbol = symbolsArray[1];
// //         const prize = symbolAmounts[symbol];
// //         showJackpotPopup(prize);
// //         balance += prize;
// //         updateBalance();
// //       }
// //     } else {
// //       const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
// //       const randomSymbol = symbols[randomSymbolIndex];
// //       reel.textContent = getRandomSymbol() + "\n" + randomSymbol + "\n" + getRandomSymbol();
// //       requestAnimationFrame(step);
// //     }
// //   }

// //   requestAnimationFrame(step);
// // }

// function spinReel(reel) {
//   let startTime = null;

//   function step(timestamp) {
//     if (!startTime) startTime = timestamp;
//     const elapsedTime = timestamp - startTime;

//     if (elapsedTime >= spinDuration) {
//       reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
//     } else {
//       const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
//       const randomSymbol = symbols[randomSymbolIndex];
//       reel.textContent = getRandomSymbol() + "\n" + randomSymbol + "\n" + getRandomSymbol();
//       requestAnimationFrame(step);
//     }

//     // if (elapsedTime >= spinDuration) {
//     //   reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
//     //   const symbolsArray = reel.textContent.split('\n');
//     //   if (symbolsArray[1] === symbolsArray[4] && symbolsArray[1] === symbolsArray[7]) {
//     //     console.log('Winning combination found:', symbolsArray[1]);
//     //     const symbol = symbolsArray[1];
//     //     const prize = symbolAmounts[symbol];
//     //     console.log('Prize:', prize);
//     //     showJackpotPopup(prize);
//     //     balance += prize;
//     //     updateBalance();
//     //   } else {
//     //     console.log('No winning combination found');
//     //   }
//     // } else {
//     //   const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
//     //   const randomSymbol = symbols[randomSymbolIndex];
//     //   reel.textContent = getRandomSymbol() + "\n" + randomSymbol + "\n" + getRandomSymbol();
//     //   requestAnimationFrame(step);
//     // }
//   }

//   requestAnimationFrame(step);
// }



// function checkForWin() {
//   const reels = Array.from(document.querySelectorAll('.reel'));

//   // Extract symbols from the second row of each reel
//   const symbolsInSecondRow = reels.map(reel => {
//     const symbolsArray = reel.textContent.split('\n');
//     return symbolsArray[1];
//   });

//   console.log('Symbols in second row:', symbolsInSecondRow);

//   // Check if all symbols in the second row match across all reels
//   const firstSymbol = symbolsInSecondRow[0];
//   const allMatch = symbolsInSecondRow.every(symbol => symbol === firstSymbol);

//   console.log('All symbols match:', allMatch);

//   return allMatch;
// }


// function spin() {
//   const reels = document.querySelectorAll('.reel');
//   reels.forEach(reel => {
//     spinReel(reel);
//   });
// }

// function updateBalance() {
//   document.getElementById('balance').textContent = balance;
// }

// document.addEventListener('DOMContentLoaded', () => {
//   populateReels();
// });

// document.getElementById('betAmount').addEventListener('input', () => {
//   const betAmount = parseInt(document.getElementById('betAmount').value);
//   const spinButton = document.getElementById('spinButton');
//   if (betAmount > 0 && betAmount <= balance) {
//     spinButton.disabled = false;
//   } else {
//     spinButton.disabled = true;
//   }
// });

// document.getElementById('spinButton').addEventListener('click', () => {
//   const betAmount = parseInt(document.getElementById('betAmount').value);
//   if (betAmount > balance) {
//     alert("You don't have enough balance!");
//     return;
//   }
//   spin();
//   balance -= betAmount;
//   updateBalance();
//   setTimeout(() => {
//     const reels = document.querySelectorAll('.reel');
//     const symbolsInSecondRow = Array.from(reels).map(reel => {
//       const symbolsArray = reel.textContent.split('\n');
//       return symbolsArray[1];
//     });
//     if (checkForWin(symbolsInSecondRow)) {
//       const prize = symbolAmounts[symbolsInSecondRow[0]]; // Get the prize based on the winning symbol
//       showJackpotPopup(prize);
//     } else {
//       alert('Better luck next time!');
//     }
//   }, spinDuration + 100);
// });

// JavaScript code goes here
// const symbols = ['⭐', '❤️', '⚡', '✨', '☘️', '🍀', '🎲', '🍒', '🍎', '🍇'];
// const symbolAmounts = {
//   '⭐': 10,
//   '❤️': 20,
//   '⚡': 30,
//   '✨': 40,
//   '☘️': 50,
//   '🍀': 60,
//   '🎲': 70,
//   '🍒': 80,
//   '🍎': 90,
//   '🍇': 100
// };
// let balance = 100;
// const spinDuration = 2000;

// function getRandomSymbol() {
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// function populateReels() {
//   const reels = document.querySelectorAll('.reel');
//   reels.forEach(reel => {
//     reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
//   });
// }

// function showJackpotPopup(prize) {
//   balance += prize; // Add the prize amount to the balance
//   updateBalance(); // Update balance display
//   alert(`Congratulations! You won $${prize}! Your balance is now $${balance}.`);
// }

// function spinReel(reel) {
//   let startTime = null;

//   function step(timestamp) {
//     if (!startTime) startTime = timestamp;
//     const elapsedTime = timestamp - startTime;

//     if (elapsedTime >= spinDuration) {
//       reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
//     } else {
//       const randomSymbolIndex = Math.floor(Math.random() * symbols.length);
//       const randomSymbol = symbols[randomSymbolIndex];
//       reel.textContent = getRandomSymbol() + "\n" + randomSymbol + "\n" + getRandomSymbol();
//       requestAnimationFrame(step);
//     }
//   }

//   requestAnimationFrame(step);
// }

// function checkForWin() {
//   const reels = Array.from(document.querySelectorAll('.reel'));
//   const symbolsInSecondRow = reels.map(reel => {
//     const symbolsArray = reel.textContent.split('\n');
//     return symbolsArray[1];
//   });
//   const firstSymbol = symbolsInSecondRow[0];
//   const allMatch = symbolsInSecondRow.every(symbol => symbol === firstSymbol);
//   return allMatch;
// }

// function spin() {
//   const reels = document.querySelectorAll('.reel');
//   reels.forEach(reel => {
//     spinReel(reel);
//   });
// }

// function updateBalance() {
//   const balanceElement = document.getElementById('balance');
//   balanceElement.textContent = balance;
//   balanceElement.setAttribute('data-value', balance); // Update the data-value attribute
// }

// document.addEventListener('DOMContentLoaded', () => {
//   populateReels();
//   updateBalance(); // Update balance display initially
// });

// document.getElementById('betAmount').addEventListener('input', () => {
//   const betAmount = parseInt(document.getElementById('betAmount').value);
//   const spinButton = document.getElementById('spinButton');
//   if (betAmount > 0 && betAmount <= balance) {
//     spinButton.disabled = false;
//   } else {
//     spinButton.disabled = true;
//   }
// });

// document.getElementById('spinButton').addEventListener('click', () => {
//   const betAmount = parseInt(document.getElementById('betAmount').value);
//   if (betAmount > balance) {
//     alert("You don't have enough balance!");
//     return;
//   }
//   spin();
//   balance -= betAmount;
//   updateBalance();
//   setTimeout(() => {
//     if (checkForWin()) {
//       const prize = symbolAmounts[document.querySelectorAll('.reel')[0].textContent.split('\n')[1]];
//       showJackpotPopup(prize);
//     } else {
//       alert('Better luck next time!');
//     }
//   }, spinDuration + 100);
// });


const symbols = ['⭐', '❤️', '⚡', '✨', '☘️', '🍀', '🎲', '🍒', '🍎', '🍇'];
const symbolAmounts = {
  '⭐': { value: 10, probability: 0.1 }, // Example probability: 10%
  '❤️': { value: 20, probability: 0.15 }, // Example probability: 15%
  '⚡': { value: 30, probability: 0.05 }, // Example probability: 5%
  '✨': { value: 40, probability: 0.2 }, // Example probability: 20%
  '☘️': { value: 50, probability: 0.1 }, // Example probability: 10%
  '🍀': { value: 60, probability: 0.07 }, // Example probability: 7%
  '🎲': { value: 70, probability: 0.03 }, // Example probability: 3%
  '🍒': { value: 80, probability: 0.12 }, // Example probability: 12%
  '🍎': { value: 90, probability: 0.8 }, // Example probability: 8%
  '🍇': { value: 100, probability: 1.00 } // Example probability: 10%
};
let balance = 200;
const spinDuration = 2000;

// function getRandomSymbol() {
//   return symbols[Math.floor(Math.random() * symbols.length)];
// }

// Function to get a random symbol based on probability
function getRandomSymbol() {
  const rand = Math.random();
  let cumulativeProbability = 0;
  for (const symbol of symbols) {
    cumulativeProbability += symbolAmounts[symbol].probability;
    if (rand <= cumulativeProbability) {
      return symbol;
    }
  }
}


// Example usage
console.log(getRandomSymbol());

function populateReels() {
  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => {
    reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
  });
}

function showJackpotPopup(prize) {
  balance += prize; // Add the prize amount to the balance
  updateBalance(); // Update balance display
  alert(`Congratulations! You won $${prize}! Your balance is now $${balance}.`);
}

function spinReel(reel) {
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const elapsedTime = timestamp - startTime;

    if (elapsedTime >= spinDuration) {
      reel.textContent = getRandomSymbol() + "\n" + getRandomSymbol() + "\n" + getRandomSymbol();
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
  const symbolsInSecondRow = Array.from(reels).map(reel => {
    const symbolsArray = reel.textContent.split('\n');
    return symbolsArray[1];
  });
  const firstSymbol = symbolsInSecondRow[0];
  const allMatch = symbolsInSecondRow.every(symbol => symbol === firstSymbol);
  return allMatch;
}

function spin() {
  const reels = document.querySelectorAll('.reel');
  reels.forEach(reel => {
    spinReel(reel);
  });
}

function updateBalance() {
  const balanceElement = document.getElementById('balance');
  balanceElement.textContent = balance;
  balanceElement.setAttribute('data-value', balance); // Update the data-value attribute
}

document.addEventListener('DOMContentLoaded', () => {
  populateReels();
  updateBalance(); // Update balance display initially
});

document.getElementById('betAmount').addEventListener('input', () => {
  const betAmount = parseInt(document.getElementById('betAmount').value);
  const spinButton = document.getElementById('spinButton');
  if (betAmount > 0 && betAmount <= balance) {
    spinButton.disabled = false;
  } else {
    spinButton.disabled = true;
  }
});

document.getElementById('spinButton').addEventListener('click', () => {
  const betAmount = parseInt(document.getElementById('betAmount').value);
  if (betAmount > balance) {
    alert("You don't have enough balance!");
    return;
  }
  spin();
  setTimeout(() => {
    if (checkForWin()) {
      const reels = document.querySelectorAll('.reel');
      const symbolsInSecondRow = Array.from(reels).map(reel => {
        const symbolsArray = reel.textContent.split('\n');
        return symbolsArray[1];
      });
      const prize = symbolAmounts[symbolsInSecondRow[0]].value;
      balance += betAmount * prize;
      updateBalance();
      showJackpotPopup(betAmount * prize);
    } else {
      balance -= betAmount;
      updateBalance();
      alert('Better luck next time!');
    }
  }, spinDuration + 100);
});

