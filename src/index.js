import readlineSync from 'readline-sync';

const maxSteps = 3;

const brainGame = (funCorrectAnswer, description) => {
  console.log(description, '\n');
  const name = readlineSync.question('What is Your name? ');
  console.log(`Hello, ${name}!\n`);
  for (let counterStep = 0; counterStep < maxSteps; counterStep += 1) {
    const correctAnswer = funCorrectAnswer();
    console.log(`Question: ${correctAnswer.question}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer.answer) {
      console.log('Correct!');
    } else {
      console.log(`\n${answer} is wrong answer ;(. Correct answer was ${correctAnswer.answer}.
Game over, ${name}!`);
      return;
    }
  }
  console.log(`\nCongratulations, ${name}!`);
};
export default brainGame;
