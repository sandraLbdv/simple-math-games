#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../games/prime';
import { welcome, greeting, isGameSuccessful } from '..';

welcome();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".\n');

const name = readlineSync.question('May I have your name? ');
greeting(name);

isGameSuccessful(game, name);
