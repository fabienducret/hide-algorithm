import * as readline from 'node:readline/promises';

export interface Guess {
  number(): Promise<number>;
}

export class DefaultGuess implements Guess {
  async number(): Promise<number> {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    const answer = await rl.question('Guess a number between 0 and 99');

    return Number(answer);
  }
}

export class FakeGuess implements Guess {
  constructor(private readonly num: number) {}

  number(): Promise<number> {
    return Promise.resolve(this.num);
  }
}
