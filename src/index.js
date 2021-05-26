import readlineSync from 'readline-sync';

const roundsCount = 3;

export default (generateGameData, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  console.log();

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log();

  for (let i = 1; i <= roundsCount; i += 1) {
    const { question, expectedAnswer } = generateGameData();
    console.log(`Question: ${question}`);

    const receivedAnswer = readlineSync.question('Your answer: ');
    if (receivedAnswer === String(expectedAnswer)) {
      console.log('Correct!');
    } else {
      console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
