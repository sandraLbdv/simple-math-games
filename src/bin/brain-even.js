#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, greeting, wonOrLost } from '..';

welcome();
console.log(`Answer "yes" if the number is even, otherwise answer "no".
\n`);

const name = readlineSync.question('May I have your name? ');
greeting(name);


const gameResult = wonOrLost();
if (gameResult) {
  console.log(`Congratulations, ${name}!`);
} else {
  console.log(`Let's try again, ${name}!`);
}
