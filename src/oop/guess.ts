import * as readline from 'node:readline/promises';

export class Guess {
  async number(): Promise<number> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const answer = await rl.question('Guess a number between 0 and 99');

    return Number(answer);
  }
}
