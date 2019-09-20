/* eslint-disable default-case */
import readlineSync from 'readline-sync';
import { getRandomInt, isAnswerCorrect } from '..';

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

export default () => {
  const number1 = getRandomInt(0, 10);
  const number2 = getRandomInt(0, 10);

  const operators = '+*-';

  const randomOperatorNumber = getRandomInt(0, 2);
  const randomOperatorChosen = operators[randomOperatorNumber];

  console.log(`Question: ${number1} ${randomOperatorChosen} ${number2}`);

  const expectedAnswer = getExpressionResult(number1, randomOperatorChosen, number2);
  const receivedAnswer = readlineSync.question('Your answer: ');

  return isAnswerCorrect(expectedAnswer, Number(receivedAnswer));
};
