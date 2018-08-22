import readlineSync from 'readline-sync';

console.log('Welcome to Brain Games!');

export const gameTrue = () => {
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);

  const isEven = question => question % 2 === 0;

  for (let counterStep = 0; counterStep < 3; counterStep += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);

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

export const gameCalc = () => {
  console.log('What is the result of the expression?\n');
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);

  const operator = ['+', '-', '*'];
  let correctAnswer;
  for (let counterStep = 0; counterStep < 3; counterStep += 1) {
    const randomNumber = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    if (counterStep === 0) correctAnswer = randomNumber + randomNumber2;
    if (counterStep === 1) correctAnswer = randomNumber - randomNumber2;
    if (counterStep === 2) correctAnswer = randomNumber * randomNumber2;

    console.log(`Question: ${randomNumber}${operator[counterStep]}${randomNumber2}`);
    const answer = readlineSync.question('Your answer: ') * 1;

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
