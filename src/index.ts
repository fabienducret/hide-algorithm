import { Attemps } from './oop/attemps';
import { DefaultDiff, VerboseDiff } from './oop/diff';
import { Farewell } from './oop/farewell';
import { DefaultGuess } from './oop/guess';
import { DefaultSecret } from './oop/secret';

const main = async () => {
  const secret = new DefaultSecret();
  const max = 10;

  await new Farewell(
    new Attemps(
      new VerboseDiff(new DefaultDiff(secret, new DefaultGuess())),
      max
    ),
    secret
  ).say();
};

main();
