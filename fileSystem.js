const fs = require("fs");

//se crea de nuevo si el arhcivo ya existia (borra y añade)
fs.writeFile("texto.txt", "Hola Mundo", (error) => {
    if(error){
        console.log(`Error al escribir el archivo: ${error}`);
    }
});

//Lectura del archivo: data
fs.readFile("texto.txt", (error, data) => {
    if(error){
        console.log(`Error al leer el archivo: ${error}`);
    }
    //Tiene que pasarse a toString para que se pueda leer
    console.log(data.toString());
});

//O utilizando utf-8
fs.readFile("texto.txt","utf-8", (error, data) => {
    if(error){
        console.log(`Error al leer el archivo: ${error}`);
    }
    //Tiene que pasarse a toString para que se pueda leer
    console.log(data);
});


fs.rename("texto.txt", "nuevoNombre.txt", (error) => {
    if(error){
        console.log(`Error al renombrar el archivo: ${error}`);
    }
});

fs.appendFile("texto.txt", "\nAdios Mundo", (error) => {
    if(error){
        console.log(`Error al añadir al archivo: ${error}`);
    }
});

//Copia
/*fs.createReadStream("texto.txt").pipe(fs.createWriteStream("texto2.txt"));
*/

//Borrar
fs.unlink("texto2.txt", (error) => {
    if(error){
        console.log(`Error al borrar el archivo: ${error}`);
    }
});

