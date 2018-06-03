import askName from './index';

const numberOfStepsInTheGame = 3;

export default (game) => {
  console.log('Welcome to the Brain Games!');
  game.askQuestion();
  const userName = askName();
  const isWin = game.run(numberOfStepsInTheGame);
  if (isWin) {
    console.log(`Congratulations, ${userName}!`);
  } else {
    console.log(`Let's try again, ${userName}!`);
  }
};
