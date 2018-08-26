import brainGame from '..';
import randomNum from '../utils';

const description = 'What number is missing in this progression?';
const lastElement = 10;

const gameProgression = () => {
  const start = randomNum(1, 99);
  const step = randomNum(1, 10);
  const hideElement = randomNum(0, 6);
  let progression = '';
  let correctAnswer = '';
  let checkPoint = start;

  for (let count = 0; count < lastElement; count += 1) {
    checkPoint = start + step * count;
    if (count === hideElement) {
      progression += '.. ';
      correctAnswer += `${checkPoint}`;
      checkPoint = start + step * (count);
    } else {
      progression += `${checkPoint} `;
    }
  }

  const result = {
    answer: correctAnswer,
    question: `${progression}`,
  };
  return result;
};

export default () => brainGame(gameProgression, description);
