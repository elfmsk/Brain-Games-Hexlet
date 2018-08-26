import brainGame from '..';
import randomNum from '../utils';

const description = 'What number is missing in this progression?';
const progressionLength = 10;

const gameProgression = () => {
  const start = randomNum(1, 99);
  const step = randomNum(1, 10);
  const hideElementPosition = randomNum(0, progressionLength - 1);
  const correctAnswer = start + hideElementPosition * step;

  let progression = '';

  for (let count = 0; count < progressionLength; count += 1) {
    const checkPoint = start + step * count;
    if (count === hideElementPosition) {
      progression += '.. ';
    } else {
      progression += `${checkPoint} `;
    }
  }

  const result = {
    answer: String(correctAnswer),
    question: `${progression}`,
  };
  return result;
};

export default () => brainGame(gameProgression, description);
