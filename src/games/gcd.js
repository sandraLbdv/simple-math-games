import readlineSync from 'readline-sync';
import { getRandomInt, compareAnswers } from '..';

const getRightAnswer = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getRightAnswer(number2, number1 % number2);
};

export default () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  console.log(`Question: ${number1}, ${number2}`);

  const expectedAnswer = getRightAnswer(number1, number2);
  const receivedAnswer = readlineSync.question('Your answer: ');

  return compareAnswers(expectedAnswer, Number(receivedAnswer));
};
