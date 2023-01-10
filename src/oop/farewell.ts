import type { Attemps } from './attemps';
import type { Secret } from './secret';

export class Farewell {
  constructor(
    private readonly attemps: Attemps,
    private readonly secret: Secret
  ) {}

  async say() {
    if (!(await this.attemps.matches())) {
      console.log('You loose, number was : ' + this.secret.number());
    }

    console.log('Thanks for playing with me');
  }
}
