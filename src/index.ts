import { Attemps } from './oop/attemps';
import { DefaultDiff, VerboseDiff } from './oop/diff';
import { Farewell } from './oop/farewell';
import { Guess } from './oop/guess';
import { Secret } from './oop/secret';

const main = async () => {
  const secret = new Secret();
  const max = 10;

  await new Farewell(
    new Attemps(new VerboseDiff(new DefaultDiff(secret, new Guess())), max),
    secret
  ).say();
};

main();
