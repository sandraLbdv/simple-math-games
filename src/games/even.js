import {
  getRandomInt, isAnswerCorrect, askQuestion, getUserAswer, game,
} from '..';

const isEven = (number) => number % 2 === 0;

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export const gameRealisation = () => {
  const randomInt = getRandomInt(0, 100);
  const gameQuestion = `${randomInt}`;
  askQuestion(gameQuestion);

  const expectedAnswer = isEven(randomInt) ? 'yes' : 'no';

  const receivedAnswer = getUserAswer();

  return isAnswerCorrect(expectedAnswer, receivedAnswer);
};

export default () => game(gameRealisation, gameDescription);
