import type { Diff } from './diff';

export class Attemps {
  constructor(private readonly diff: Diff, private readonly max: number) {}

  async matches(): Promise<boolean> {
    let t = 0;

    while (t <= this.max && (await this.diff.number()) !== 0) {
      ++t;
    }

    return t <= this.max;
  }
}
