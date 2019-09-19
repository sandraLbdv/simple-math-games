#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../games/gcd';
import { welcome, greeting, checkWonOrLost } from '..';

welcome();
console.log('Find the greatest common divisor of given numbers.\n');

const name = readlineSync.question('May I have your name? ');
greeting(name);

checkWonOrLost(game, name);
