/* eslint-disable default-case */
import { cons } from '@hexlet/pairs';
import getRandomNum from '../utils';
import game from '..';

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

const gameDescription = 'What is the result of the expression?';

const generateGameData = () => {
  const number1 = getRandomNum(0, 10);
  const number2 = getRandomNum(0, 10);

  const operatorsCount = operators.length;

  const randomOperator = operators[getRandomNum(0, operatorsCount - 1)];

  const question = `${number1} ${randomOperator} ${number2}`;

  const expectedAnswer = getExpressionResult(number1, randomOperator, number2);

  return cons(question, expectedAnswer);
};

export default () => game(generateGameData, gameDescription);
