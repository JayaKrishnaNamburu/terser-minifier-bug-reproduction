import '../styles/index.scss';
import { UIDL } from './uidl';
import { generateComponent } from '@teleporthq/teleport-code-generator';

if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

console.log('webpack starterkit');

const run = async () => {
  try {
    // const generator = await import('@teleporthq/teleport-code-generator').then((mod) => mod.generateComponent);
    const result = await generateComponent(UIDL);
    console.log(result);
  } catch(e) {
    console.log(e);
  }
};

run();