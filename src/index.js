#!/usr/bin/env node
import readlineSync from 'readline-sync';

export const askname = () => {
  const actual = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${actual}`);
};


export const gameTrue = () => {
  const helloGame = console.log('Welcome to Brain Games!');
  const answerGmaeTrue = console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);

  const comparison = (question) => question % 2 === 0;

  for (let i = 0; i < 3; i += 1) {

    const question = Math.floor(Math.random() * 100);
    const correctAnswer = comparison(question) ? 'yes' : 'no';

    console.log(`Question: ${question}`);

    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`\n${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
Let's try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
