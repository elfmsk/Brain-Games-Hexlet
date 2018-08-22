export default () => {
  const isEven = question => question % 2 === 0;
  const randomNumber = Math.floor(Math.random() * 100);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';
  console.log(`Question: ${randomNumber}`);
  return correctAnswer;
};
