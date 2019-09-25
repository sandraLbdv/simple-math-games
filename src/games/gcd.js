import {
  getRandomInt, isAnswerCorrect, getUserAswer, askQuestion,
} from '..';

const getGCD = (number1, number2) => {
  if (number2 === 0) {
    return number1;
  }
  return getGCD(number2, number1 % number2);
};

export const gameDescription = 'Find the greatest common divisor of given numbers.\n';

export const gameRealisation = () => {
  const number1 = getRandomInt(1, 100);
  const number2 = getRandomInt(1, 100);

  const gameQuestion = `Question: ${number1}, ${number2}`;
  askQuestion(gameQuestion);

  const expectedAnswer = getGCD(number1, number2);
  const receivedAnswer = getUserAswer();

  return isAnswerCorrect(expectedAnswer, Number(receivedAnswer));
};
