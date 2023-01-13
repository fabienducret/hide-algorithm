export class Secret {
  private readonly num: number;

  constructor() {
    this.num = Math.round(Math.random() * 100);
  }

  number(): number {
    return this.num;
  }
}
