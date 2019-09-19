import readlineSync from 'readline-sync';
import { getRandomInt, compareAnswers } from '..';

const checkEvenOrNot = (number) => {
  let correctAnswer;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

export default () => {
  const randomInt = getRandomInt(0, 100);
  console.log(`Question: ${randomInt}`);

  const expectedAnswer = checkEvenOrNot(randomInt);
  const receivedAnswer = readlineSync.question('Your answer: ');

  return compareAnswers(expectedAnswer, receivedAnswer);
};
