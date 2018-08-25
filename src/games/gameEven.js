import brainGame from '..';
import randomNum from '../utils';

const isEven = question => question % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';
const gameEven = () => {
  const randomNumber = randomNum(1, 99);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${randomNumber}`,
  };

  return result;
};

export default () => brainGame(gameEven, description);
