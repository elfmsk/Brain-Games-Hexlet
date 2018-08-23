export default () => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  const randomNumber2 = Math.floor(Math.random() * 100) + 1;
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
