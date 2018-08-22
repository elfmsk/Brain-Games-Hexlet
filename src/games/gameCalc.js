export default (counterStep) => {
  const operator = ['+', '-', '*'];
  let correctAnswer;
  const randomNumber = Math.floor(Math.random() * 100);
  const randomNumber2 = Math.floor(Math.random() * 100);
  if (counterStep === 0) correctAnswer = randomNumber + randomNumber2;
  if (counterStep === 1) correctAnswer = randomNumber - randomNumber2;
  if (counterStep === 2) correctAnswer = randomNumber * randomNumber2;

  console.log(`Question: ${randomNumber} ${operator[counterStep]} ${randomNumber2}`);
  return String(correctAnswer);
};
