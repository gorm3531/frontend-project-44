const getRandomNumber = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min;


const generateProgression = (start, step, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * step);
  }
  return progression;
};


const createQuestion = (progression, hiddenIndex) => {
  const questionParts = progression.map((num, index) =>
    index === hiddenIndex ? '..' : num.toString()
  );
  return questionParts.join(' ');
};

export const description = 'What number is missing in the progression?';

export const generateRound = () => {
  
  const start = getRandomNumber(1, 50);
  const step = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10); 

 
  const progression = generateProgression(start, step, length);


  const hiddenIndex = getRandomNumber(0, length - 1);
  const correctAnswer = progression[hiddenIndex].toString();

  const question = createQuestion(progression, hiddenIndex);

  return { question, correctAnswer };
};
