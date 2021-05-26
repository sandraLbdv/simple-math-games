import getRandomNum from '../utils';
import game from '..';

const operators = '+*-';

const getExpressionResult = (number1, operation, number2) => {
  switch (operation) {
    case '+':
      return (number1 + number2);
    case '*':
      return (number1 * number2);
    case '-':
      return (number1 - number2);
    default: return null;
  }
};

const gameDescription = 'What is the result of the expression?';

const generateGameData = () => {
  const number1 = getRandomNum(0, 10);
  const number2 = getRandomNum(0, 10);

  const operator = operators[getRandomNum(0, operators.length - 1)];

  const question = `${number1} ${operator} ${number2}`;

  const expectedAnswer = getExpressionResult(number1, operator, number2);

  return { question, expectedAnswer };
};

export default () => game(generateGameData, gameDescription);
