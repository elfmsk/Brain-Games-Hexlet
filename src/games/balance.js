import brainGame from '..';
import randomNum from '../utils';

const description = 'Balance the given number.';
const balanceNum = (num) => {
  const arg = String(num);
  let sum = 0;
  for (let count = 0; count < arg.length; count += 1) {
    sum += Number(arg[count]);
  }
  const middle = sum / arg.length;
  const residue = sum % arg.length;
  const minValue = Math.floor(middle);

  let result = '';

  for (let count = 0; count < arg.length; count += 1) {
    if (count < arg.length - residue) {
      result += minValue;
    } else {
      result += minValue + 1;
    }
  }
  return result;
};
const balance = () => {
  const randomNumber = randomNum(100, 9999);
  const result = {
    answer: balanceNum(randomNumber),
    question: `${randomNumber}`,
  };
  return result;
};

export default () => brainGame(balance, description);
