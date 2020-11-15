import { add } from './add';

console.log('2 + 2 =', add(2, 2));

setTimeout(function loop() {
  console.log('.');
  setTimeout(loop, 1000);
}, 1000);
