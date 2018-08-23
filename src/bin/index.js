import readlineSync from 'readline-sync';

const brainGame = (funCorrectAnswer, description) => {
  console.log('Welcome to Brain Games!');
  console.log(description);
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let counterStep = 0; counterStep < 3; counterStep += 1) {
    const correctAnswer = funCorrectAnswer(counterStep);
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
export default brainGame;
