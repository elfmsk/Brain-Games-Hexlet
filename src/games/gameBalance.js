import brainGame from '..';
import utils from '../utils';

const description = 'Balance the given number.';
const sortNum = mas => mas.sort();
const strMas = str => str.split('');
const deleteFirstLast = (mas) => {
  mas.pop();
  mas.shift();
  return mas;
};
const stopBalance = 2;

export default () => {
  const balance = () => {
    const randomNumber = String(utils(10, 9999));

    const correctAnswer = (arg) => {
      const sortArg = sortNum(arg);
      const min = Number(sortArg[0]);
      const max = Number(sortArg[sortArg.length - 1]);
      let medium;
      if (max - min < stopBalance) {
        const result = {
          answer: sortArg.join(''),
          question: `${randomNumber}`,
        };
        return result;
      }
      if ((max + min) % 2 === 0) {
        medium = String((max + min) / 2);
        deleteFirstLast(sortArg);
        sortArg.splice(0, 0, medium, medium);
      } else {
        deleteFirstLast(sortArg);
        sortArg.push(String(((max + min) / 2) - 0.5));
        sortArg.push(String(((max + min) / 2) + 0.5));
      }
      return correctAnswer(sortArg);
    };

    return correctAnswer(strMas(randomNumber));
  };
  return brainGame(balance, description);
};
