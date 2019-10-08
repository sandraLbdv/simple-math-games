import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

export default (generateGameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();

  for (let i = 1; i <= roundsCount; i += 1) {
    const gameData = generateGameData();
    console.log(`Question: ${car(gameData)}`);

    const receivedAnswer = readlineSync.question('Your answer: ');
    const expectedAnswer = String(cdr(gameData));
    if (receivedAnswer === expectedAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
