/*const fs = require('fs');

let data = fs.readFileSync('./data/personas.json');
console.log(data);

let personas = JSON.parse(data);
console.log(personas);
console.log(typeof personas);
*/

//Caché de módulos
let jsondata = require('./data/personas.json');
console.log(jsondata)

const fs = require('fs');

fs.writeFile('./data/personas.json', JSON.stringify(jsondata), (err) => {
    if(err){
        console.log(err);
    }else{
        console.log('Archivo guardado');
    }
});