import brainGame from '..';
import randomNum from '../utils';

const description = 'Find the greatest common divisor of given numbers.';
const findNOD = (num1, num2) => {
  let numberOne = num1;
  let numberTwo = num2;
  if (numberOne === numberTwo) {
    return String(numberOne);
  }
  if (numberOne > numberTwo) {
    numberOne = num1 - num2;
  } else {
    numberTwo = num2 - num1;
  }
  return findNOD(numberOne, numberTwo);
};

const gameGCD = () => {
  const randomNumber = randomNum(1, 99);
  const randomNumber2 = randomNum(1, 99);
  const result = {
    answer: findNOD(randomNumber, randomNumber2),
    question: `${randomNumber} ${randomNumber2}`,
  };
  return result;
};

export default () => brainGame(gameGCD, description);
