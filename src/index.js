import readlineSync from 'readline-sync';

export const welcome = () => console.log('Welcome to the Brain Games!');
export const greeting = (name) => console.log(`Hello, ${name}! \n`);

const getRandomInt = (min, max) => {
  const rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
};

const checkAnswer = (number, answer) => {
  let correctAnswer;
  if (number % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }

  if (answer === correctAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  return false;
};

const askQuestion = (number) => console.log(`Question: ${number}`);

export const wonOrLost = () => {
  for (let i = 0; i < 3; i += 1) {
    const randomInt = getRandomInt(0, 100);
    askQuestion(randomInt);
    const answer = readlineSync.question('Your answer: ');
    if (!checkAnswer(randomInt, answer)) {
      return false;
    }
  }
  return true;
};
