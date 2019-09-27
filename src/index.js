import readlineSync from 'readline-sync';

export const getRandomInt = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

export const isAnswerCorrect = (expectedAnswer, receivedAnswer) => {
  if (expectedAnswer === receivedAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${receivedAnswer}' is wrong answer ;(. Correct answer was '${expectedAnswer}'.`);
  return false;
};

export const isGameSuccessful = (gameRealisation, name) => {
  for (let i = 0; i < 3; i += 1) {
    if (!gameRealisation()) {
      console.log(`Let's try again, ${name}!`);
      return false;
    }
  }
  console.log(`Congratulations, ${name}!`);
  return true;
};

export const getUserAswer = () => readlineSync.question('Your answer: ');

export const game = (gameRealisation, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}! \n`);

  return isGameSuccessful(gameRealisation, name);
};

export const askQuestion = (gameQuestion) => console.log(`Question: ${gameQuestion}`);
