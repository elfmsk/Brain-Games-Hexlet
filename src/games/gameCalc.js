import utils from '../utils';
import brainGame from '..';

const description = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

export default () => {
  const gameCalc = (counterStep) => {
    let correctAnswer;
    const randomNumber = utils(1, 99);
    const randomNumber2 = utils(1, 99);

    switch (counterStep) {
      case 0: correctAnswer = randomNumber + randomNumber2;
        break;
      case 1: correctAnswer = randomNumber - randomNumber2;
        break;
      case 2: correctAnswer = randomNumber * randomNumber2;
        break;
      default: correctAnswer = 'Перебор!';
    }

    const result = {
      answer: String(correctAnswer),
      question: `${randomNumber} ${operator[counterStep]} ${randomNumber2}`,
    };

    return result;
  };

  return brainGame(gameCalc, description);
};
