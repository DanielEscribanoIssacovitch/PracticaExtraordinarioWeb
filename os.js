const os = require('os');

let cpu=os.cpus();
console.log(cpu); //Si te fijas son JSONs

let sistema=os.platform();
console.log(sistema);

let usuario=os.hostname();
console.log(usuario);