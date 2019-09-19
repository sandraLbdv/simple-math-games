#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../games/even';
import { welcome, greeting, checkWonOrLost } from '..';

welcome();
console.log('Answer "yes" if the number is even, otherwise answer "no".\n');

const name = readlineSync.question('May I have your name? ');
greeting(name);

checkWonOrLost(game, name);
