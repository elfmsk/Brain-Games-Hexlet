import until from '../until';
import brainGame from '..';

export default () => {
  const description = 'What is the result of the expression?\n';
  const operator = ['+', '-', '*'];

  const gameCalc = (counterStep) => {
    let correctAnswer;
    const randomNumber = until();
    const randomNumber2 = until();

    switch (counterStep) {
      case 0: correctAnswer = randomNumber + randomNumber2;
        break;
      case 1: correctAnswer = randomNumber - randomNumber2;
        break;
      case 2: correctAnswer = randomNumber * randomNumber2;
        break;
      default: correctAnswer = 'Перебор!';
    }

    console.log(`Question: ${randomNumber} ${operator[counterStep]} ${randomNumber2}`);
    return String(correctAnswer);
  };

  return brainGame(gameCalc, description);
};
