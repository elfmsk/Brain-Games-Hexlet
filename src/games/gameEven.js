import brainGame from '..';
import utils from '../utils';

const isEven = question => question % 2 === 0;
const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => {
  const gameEven = () => {
    const randomNumber = utils(1, 99);
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    const result = {
      answer: correctAnswer,
      question: `${randomNumber}`,
    };

    return result;
  };

  return brainGame(gameEven, description);
};
