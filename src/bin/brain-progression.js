#!/usr/bin/env node
import readlineSync from 'readline-sync';
import game from '../games/progression';
import { welcome, greeting, isGameSuccessful } from '..';

welcome();
console.log('What number is missing in the progression?\n');

const name = readlineSync.question('May I have your name? ');
greeting(name);

isGameSuccessful(game, name);
