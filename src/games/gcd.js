import getRandomNum from '../utils';
import game from '..';

const getGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGcd(number2, number1 % number2);
};

const gameDescription = 'Find the greatest common divisor of given numbers.';

const generateGameData = () => {
  const number1 = getRandomNum(1, 100);
  const number2 = getRandomNum(1, 100);

  const question = `${number1}, ${number2}`;

  const expectedAnswer = getGcd(number1, number2);

  return { question, expectedAnswer };
};

export default () => game(generateGameData, gameDescription);
