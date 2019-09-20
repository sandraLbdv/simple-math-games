#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../games/calc';
import { welcome, greeting, isGameSuccessful } from '..';

welcome();
console.log('What is the result of the expression?\n');

const name = readlineSync.question('May I have your name? ');
greeting(name);

isGameSuccessful(game, name);
