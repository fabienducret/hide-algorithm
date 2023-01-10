export interface Secret {
  number(): number;
}

export class DefaultSecret implements Secret {
  private readonly num: number;

  constructor() {
    this.num = Math.round(Math.random() * 100);
  }

  number(): number {
    return this.num;
  }
}

export class FakeSecret implements Secret {
  constructor(private readonly num: number) {}

  number(): number {
    return this.num;
  }
}
