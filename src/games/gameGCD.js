import brainGame from '..';
import utils from '../utils';

const description = 'Find the greatest common divisor of given numbers.';

export default () => {
  const gameGCD = () => {
    const randomNumber = utils(1, 99);
    const randomNumber2 = utils(1, 99);
    const correctAnswer = (num1, num2) => {
      let numberOne = num1;
      let numberTwo = num2;
      if (numberOne === numberTwo) {
        const result = {
          answer: String(numberOne),
          question: `${randomNumber} ${randomNumber2}`,
        };
        return result;
      }
      if (numberOne > numberTwo) {
        numberOne = num1 - num2;
      } else {
        numberTwo = num2 - num1;
      }
      return correctAnswer(numberOne, numberTwo);
    };

    return correctAnswer(randomNumber, randomNumber2);
  };

  return brainGame(gameGCD, description);
};
