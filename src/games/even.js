const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const isEven = (num) => num % 2 === 0;

export const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export const generateRound = () => {
  const number = getRandomNumber(1, 100);
  const question = number.toString();
  const correctAnswer = isEven(number) ? 'yes' : 'no';

  return { question, correctAnswer };
};
