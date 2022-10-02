const os = require('os');

console.log('La Memoria libre es de:' + os.freemem());

const vec = [];

for (let i = 0; f < 1000000; f++) {
  vec.push(f);
}
console.log('Memoria libre despues de hacer el vector:' + os.freemem());