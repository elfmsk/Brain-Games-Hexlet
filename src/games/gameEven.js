import brainGame from '..';
import until from '../until';

export default () => {
  const isEven = question => question % 2 === 0;
  const description = 'Answer "yes" if number even otherwise answer "no".\n';
  const gameEven = () => {
    const randomNumber = until();
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
    console.log(`Question: ${randomNumber}`);
    return correctAnswer;
  };

  return brainGame(gameEven, description);
};
