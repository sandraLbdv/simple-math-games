import {
  getRandomInt, isAnswerCorrect, askQuestion, getUserAswer,
} from '..';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

export const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".\n';

export const gameRealisation = () => {
  const randomInt = getRandomInt(0, 100);
  const gameQuestion = `Question: ${randomInt}`;
  askQuestion(gameQuestion);

  const expectedAnswer = isEven(randomInt) ? 'yes' : 'no';

  const receivedAnswer = getUserAswer();

  return isAnswerCorrect(expectedAnswer, receivedAnswer);
};
