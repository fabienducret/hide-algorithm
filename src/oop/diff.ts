import type { Guess } from './guess';
import type { Secret } from './secret';

export interface Diff {
  number(): Promise<number>;
}

export class DefaultDiff implements Diff {
  constructor(private readonly secret: Secret, private readonly guess: Guess) {}

  async number(): Promise<number> {
    return (await this.guess.number()) - this.secret.number();
  }
}

export class VerboseDiff implements Diff {
  constructor(private readonly diff: Diff) {}

  async number(): Promise<number> {
    const num = await this.diff.number();

    if (num < 0) {
      console.log('Too small');
    } else if (num > 0) {
      console.log('Too big');
    } else {
      console.log('Bingo !');
    }

    return num;
  }
}
