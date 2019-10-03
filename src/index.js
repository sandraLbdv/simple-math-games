import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

export const getRandomNum = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const game = (gameRealisation, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);

  for (let i = 1; i <= 3; i += 1) {
    const pair = gameRealisation();
    console.log(`Question: ${car(pair)}`);

    const receivedAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = String(cdr(pair));
    if (receivedAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};
