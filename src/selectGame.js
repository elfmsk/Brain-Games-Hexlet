#!/usr/bin/env node

import readlineSync from 'readline-sync';

import calc from './games/calc';
import even from './games/even';
import progression from './games/progression';
import prime from './games/prime';
import balance from './games/balance';
import gcd from './games/gcd';

const gameSet = [even, calc, gcd, balance, progression, prime];
const gameSetShow = ['even', 'calc', 'gcd', 'balance', 'progression', 'prime'];
const cancel = -1;

const selectGame = () => {
  console.log('Welcome to Brain Games!');
  const questionSelect = readlineSync.keyInSelect(gameSetShow, 'What game would you like to play?\n');

  if (questionSelect === cancel) return;

  gameSet[questionSelect]();

  const questionPlayOrExit = readlineSync.question(`\nWould You play another game?\n
Press ENTER for return to menu,
Otherwise answer "no" for exit. `);

  if (questionPlayOrExit === 'no') {
    console.log('Good by!');
  } else {
    selectGame();
  }
};

export default selectGame;
