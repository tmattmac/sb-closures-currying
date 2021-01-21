function guessingGame() {
  const randomNum = Math.floor(Math.random() * 100);
  let winStatus = false;
  let numGuesses = 0;
  return function (guess) {
    if (winStatus) {
      return "The game is over, you already won!"
    }
    numGuesses++;

    if (guess > randomNum) {
      return `${guess} is too high!`;
    }
    else if (guess < randomNum) {
      return `${guess} is too low!`;
    }
    else {
      winStatus = true;
      return `You win! You found ${randomNum} in ${numGuesses} guesses.`
    }
  };
}

module.exports = { guessingGame };
