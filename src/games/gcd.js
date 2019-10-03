import { cons } from '@hexlet/pairs';
import { getRandomNum, game } from '..';

const getGCD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.\n';

const gameRealisation = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);

  const question = `${number1}, ${number2}`;

  const expectedAnswer = getGCD(number1, number2);

  return cons(question, expectedAnswer);
};

export default () => game(gameRealisation, gameDescription);
