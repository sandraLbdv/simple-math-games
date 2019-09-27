/* eslint-disable default-case */
import {
  getRandomInt, isAnswerCorrect, getUserAswer, askQuestion, game,
} from '..';

const getExpressionResult = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return (number1 + number2);
    case '*':
      return (number1 * number2);
    case '-':
      return (number1 - number2);
  }
  return null;
};

const operators = '+*-';

export const gameDescription = 'What is the result of the expression?\n';

export const gameRealisation = () => {
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);

  const operatorsCount = operators.length;

  const randomOperatorNumber = getRandomInt(0, operatorsCount - 1);
  const randomOperatorChosen = operators[randomOperatorNumber];

  const gameQuestion = `${number1} ${randomOperatorChosen} ${number2}`;
  askQuestion(gameQuestion);

  const expectedAnswer = getExpressionResult(number1, randomOperatorChosen, number2);
  const receivedAnswer = getUserAswer();

  return isAnswerCorrect(expectedAnswer, Number(receivedAnswer));
};

export default () => game(gameRealisation, gameDescription);
