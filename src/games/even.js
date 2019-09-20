import readlineSync from 'readline-sync';
import { getRandomInt, isAnswerCorrect } from '..';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export default () => {
  const randomInt = getRandomInt(0, 100);
  console.log(`Question: ${randomInt}`);

  const expectedAnswer = isEven(randomInt) ? 'yes' : 'no';

  const receivedAnswer = readlineSync.question('Your answer: ');

  return isAnswerCorrect(expectedAnswer, receivedAnswer);
};
