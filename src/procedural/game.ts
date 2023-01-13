import * as readline from 'node:readline/promises';

export const game = async () => {
  const n = Math.round(Math.random() * 100);
  let t = 0;

  while (true) {
    if (++t > 10) {
      console.log('You loose, number was : ' + n);
      break;
    }

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const a = await rl.question('Guess a number between 0 and 99');
    const x = Number(a);

    if (x < n) {
      console.log('Too small');
    } else if (x > n) {
      console.log('Too big');
    } else {
      console.log('Bingo !');
      break;
    }
  }

  console.log('Thanks for playing with me');
};
