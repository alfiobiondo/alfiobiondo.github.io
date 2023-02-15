let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.round(Math.random() * 9);

const compareGuesses = (humanGuess, computerGuess, newSecretTargetNumber) => {
  const humanVsTarget = Math.abs(humanGuess - newSecretTargetNumber);
  const computerVsTarget = Math.abs(computerGuess - newSecretTargetNumber);
  return (humanVsTarget <= computerVsTarget ? true : false);
};

const updateScore = winner => {
  if (winner === 'human') {
    humanScore += 1;
  } else if (winner === 'computer') {
    computerScore += 1;
  }
};

const advanceRound = () => currentRoundNumber += 1;