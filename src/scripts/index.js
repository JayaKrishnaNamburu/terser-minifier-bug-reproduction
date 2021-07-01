import '../styles/index.scss';
import { UIDL } from './uidl';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

const run = async () => {
  try {
    const generator = await import('@teleporthq/teleport-code-generator').then((mod) => mod.generateComponent);
    const result = await generator(UIDL);
    console.log(result);
  } catch(e) {
    console.log(e);
  }
};

run();