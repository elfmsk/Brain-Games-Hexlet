import brainGame from '..';
import randomNum from '../utils';

const description = 'Is this number prime?';

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let count = 2; count < num; count += 1) {
    if (num % count === 0) return false;
  }
  return true;
};

const prime = () => {
  const randomNumber = randomNum(1, 99);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const result = {
    answer: correctAnswer,
    question: `${randomNumber}`,
  };
  return result;
};


export default () => brainGame(prime, description);
