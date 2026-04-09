#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const isEven = (num) => num % 2 === 0;

const playEvenGame = () => {
  console.log('Welcome to the Brain Games!');
  const name = greetUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsToWin = 3;
  for (let i = 0; i < roundsToWin; i += 1) {
    const number = Math.floor(Math.random() * 100) + 1;
    console.log(`Question: ${number}`);
    const userAnswer = readlineSync.question('Your answer: ');

    const correctAnswer = isEven(number) ? 'yes' : 'no';

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

playEvenGame();


