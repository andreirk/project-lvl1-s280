import readlineSync from 'readline-sync';
import getNameFromUser from '..';

const isEven = num => num % 2 === 0;

const game = (numberOfTries) => {
  console.log('Answer "yes" if number even otherwise answer "no". \n\n');
  const userName = getNameFromUser();
  for (let i = 0; i < numberOfTries; i += 1) {
    const num = Math.ceil(Math.random() * 20);
    const answer = readlineSync.question(`Question: ${num} \n`);
    const correctAnswer = isEven(num) ? 'yes' : 'no';
    console.log(`You answer: ${answer}`);
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default game;
