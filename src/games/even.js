import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import game from '..';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomNum(0, 100);

  const expectedAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, expectedAnswer);
};

export default () => game(generateGameData, gameDescription);
