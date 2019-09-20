import readlineSync from 'readline-sync';
import { getRandomInt, isAnswerCorrect } from '..';

const getGCD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

export default () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  console.log(`Question: ${number1}, ${number2}`);

  const expectedAnswer = getGCD(number1, number2);
  const receivedAnswer = readlineSync.question('Your answer: ');

  return isAnswerCorrect(expectedAnswer, Number(receivedAnswer));
};
