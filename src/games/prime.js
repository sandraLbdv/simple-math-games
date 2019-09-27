import {
  getRandomInt, isAnswerCorrect, getUserAswer, askQuestion, game,
} from '..';

const isPrime = (number) => {
  if ((number === 1) || (number === 0)) {
    return false;
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

export const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".\n';

export const gameRealisation = () => {
  const question = getRandomInt(0, 50);

  const gameQuestion = `${question}`;
  askQuestion(gameQuestion);

  const expectedAnswer = isPrime(question) ? 'yes' : 'no';
  const receivedAnswer = getUserAswer();

  return isAnswerCorrect(expectedAnswer, receivedAnswer);
};

export default () => game(gameRealisation, gameDescription);
