#!/usr/bin/env node
import { greeting } from '..';
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');
greeting(name);
