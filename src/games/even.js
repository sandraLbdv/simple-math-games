import { cons } from '@hexlet/pairs';
import { getRandomNum, game } from '..';

const isEven = (number) => number % 2 === 0;

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';

const gameRealisation = () => {
  const question = getRandomNum(0, 100);

  const expectedAnswer = isEven(question) ? 'yes' : 'no';

  const pair = cons(question, expectedAnswer);

  return pair;
};

export default () => game(gameRealisation, gameDescription);
