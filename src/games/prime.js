import getRandomNum from '../utils';
import game from '..';

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(number); i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const generateGameData = () => {
  const question = getRandomNum(0, 50);

  const expectedAnswer = isPrime(question) ? 'yes' : 'no';

  return { question, expectedAnswer };
};

export default () => game(generateGameData, gameDescription);
