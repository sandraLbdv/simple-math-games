export const welcome = () => console.log('Welcome to the Brain Games!');
export const greeting = (name) => console.log(`Hello, ${name}! \n`);

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
