#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const askname = () => {
  const actual = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${actual}`);
};

export const yesorno = () => {
  console.log('Welcome to Brain Games!\nAnswer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);

  const objbool = {
    yes: true,
    no: false,
  };
  const objansw = {
    yes: 'no',
    no: 'yes',
  };

  for (let i = 0; i <= 3; i += 1) {
    if (i === 3) {
      console.log(`Congratulations, ${name}!`);
      break;
    }

    const quest = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
    const comparison = quest % 2 === 0;

    console.log(`Question: ${quest}`);

    const answ = readlineSync.question('Your answer: ');

    if (objbool[answ] === comparison) {
      console.log('Correct!');
    } else {
      console.log(`\n${answ} is wrong answer ;(. Correct answer was ${objansw[answ]}.
Let's try again, ${name}!`);
      break;
    }
  }
};
