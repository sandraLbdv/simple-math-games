#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../games/calc';
import { welcome, greeting, checkWonOrLost } from '..';

welcome();
console.log('What is the result of the expression?\n');

const name = readlineSync.question('May I have your name? ');
greeting(name);

checkWonOrLost(game, name);
