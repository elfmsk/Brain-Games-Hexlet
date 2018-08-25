import brainGame from '..';
import randomNum from '../utils';

const description = 'What number is missing in this progression?';

const gameProgression = () => {
  const start = randomNum(1, 99);
  const prog = randomNum(1, 2);
  const questunStep = randomNum(0, 6);
  let resultStr = `${start} `;
  let correctAnswer = '';
  let step = start;
  for (let count = 0; count < 9; count += 1) {
    step += prog;
    if (count === questunStep) {
      resultStr += '.. ';
      correctAnswer += `${step} ${step + prog}`;
      step += prog;
    } else {
      resultStr += `${step} `;
    }
  }
  const result = {
    answer: correctAnswer,
    question: `${resultStr}`,
  };

  return result;
};

export default () => brainGame(gameProgression, description);
