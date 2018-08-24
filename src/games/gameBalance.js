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
      const sortArg = sortNum(arg); // Сортируем массив от меньшего к большему
      const min = Number(sortArg[0]); // Берем с левого края массива наименьшее число
      const max = Number(sortArg[sortArg.length - 1]); // аналогично с наибольшим числом
      let medium; // эта переменная пригодиться в дальнейшем при подсчете
      if (max - min < stopBalance) { // Основное условие при выполнений которого вернется
        // правильный ответ
        const result = {
          answer: sortArg.join(''),
          question: `${randomNumber}`,
        };
        return result;
      }
      if ((max + min) % 2 === 0) { // Идея простая находим среднее арифметическое значение.
        medium = String((max + min) / 2);
        deleteFirstLast(sortArg); // удаляем старые значения из массива
        sortArg.splice(0, 0, medium, medium); // добавляем новые значения
      } else {
        deleteFirstLast(sortArg);
        sortArg.push(String(((max + min) / 2) - 0.5));
        sortArg.push(String(((max + min) / 2) + 0.5));
      }
      return correctAnswer(sortArg); // рекурсивно вызываем функцию передавая новый массив
    };

    return correctAnswer(strMas(randomNumber)); // Вызываем функцию которая находит правильный
    // ответ. Передаем ей рандомное число преобразованое в массив.
  };
  return brainGame(balance, description);
};
