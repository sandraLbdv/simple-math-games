#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { welcome, greeting } from '..';

welcome();
const name = readlineSync.question('May I have your name? ');
greeting(name);
