import readlineSync from 'readline-sync';
import { greetUser } from './cli.js';

export const runGame = (description, generateRound) => {
  console.log('Welcome to the Brain Games!');
  const name = greetUser();
  console.log(description);

  const roundsToWin = 3;

  for (let i = 0; i < roundsToWin; i += 1) {
    const { question, correctAnswer } = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};
