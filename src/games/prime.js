import readlineSync from 'readline-sync';
import { getRandomInt, compareAnswers } from '..';

const checkPrimeOrNot = (number) => {
  if (number === 1) {
    return 'no';
  }

  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
};

export default () => {
  const randomInt = getRandomInt(0, 50);
  console.log(`Question: ${randomInt}`);

  const expectedAnswer = checkPrimeOrNot(randomInt);
  const receivedAnswer = readlineSync.question('Your answer: ');

  return compareAnswers(expectedAnswer, receivedAnswer);
};
