import brainGame from '..';
import until from '../until';

export default () => {
  const description = 'Find the greatest common divisor of given numbers.\n';

  const gameGCD = () => {
    const randomNumber = until();
    const randomNumber2 = until();
    const correctAnswer = (num1, num2) => {
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
      return correctAnswer(numberOne, numberTwo);
    };
    console.log(`Question: ${randomNumber} ${randomNumber2}`);
    return correctAnswer(randomNumber, randomNumber2);
  };

  return brainGame(gameGCD, description);
};
