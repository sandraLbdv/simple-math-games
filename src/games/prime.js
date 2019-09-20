import readlineSync from 'readline-sync';
import { getRandomInt, isAnswerCorrect } from '..';

const isPrime = (number) => {
  if (number === 1) {
    return false;
  }

  for (let i = 2; i < Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export default () => {
  const randomInt = getRandomInt(0, 50);
  console.log(`Question: ${randomInt}`);

  const expectedAnswer = isPrime(randomInt) ? 'yes' : 'no';
  const receivedAnswer = readlineSync.question('Your answer: ');

  return isAnswerCorrect(expectedAnswer, receivedAnswer);
};
