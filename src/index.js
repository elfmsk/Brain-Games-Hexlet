#!/usr/bin/env node
import readlineSync from 'readline-sync';

const askname = () => {
      const actual = readlineSync.question('What is Your name? ');
      return console.log(`Hello, ${actual}`);
};

export default askname;
