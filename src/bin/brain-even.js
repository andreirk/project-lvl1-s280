#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greet from '..';
import welcome from './brain-games';

welcome();

console.log('Answer "yes" if number even otherwise answer "no".');


const isEven = (num) => {
  return num % 2 === 0;
};

const generateNumbersArr = (num) => {
  const arr = [];
  for (let i = 0; i < num; i++) {
    const newNum = Math.ceil(Math.random() * 20);
    arr.push(newNum);
  }
  return arr;
}

const game = (numberOfTries) => {
  const userName = greet();
  const numsArr = generateNumbersArr(numberOfTries);
  for (let i = 0; i < numsArr.length; i++) {
    const num = numsArr[i];
    const answer = readlineSync.question(`Question: ${num} \n`);
    const opositeAnswer = answer === 'yes' ? 'no' : 'yes';
    console.log(`You answer: ${answer}`);
    if (isEven(num) && answer === 'yes') {
      console.log('Correct!');
    } else if (!isEven(num) && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${opositeAnswer}`);
      console.log(`Let's try again, ${userName}!`)
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

game(3);
