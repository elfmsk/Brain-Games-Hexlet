import randomNum from '../utils';
import brainGame from '..';

const description = 'What is the result of the expression?';
const operator = ['+', '-', '*'];

const gameCalc = () => {
  let correctAnswer;
  const randomNumber = randomNum(1, 99);
  const randomNumber2 = randomNum(1, 99);
  const randomOperator = randomNum(0, 2);
  switch (randomOperator) {
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
    question: `${randomNumber} ${operator[randomOperator]} ${randomNumber2}`,
  };

  return result;
};

export default () => brainGame(gameCalc, description);
