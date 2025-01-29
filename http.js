const http=require('http');

// https://nodejs.org/api/http.html

//req = peticion
//res = respuesta
http.createServer((req,res)=>{
    response.writeHead(200,{ //200 = OK
        'Content-Type':'text/plain' //Tipo de contenido
    });

    response.write('Hola Mundo'); //Escribir en la respuesta

    response.end(); //Finalizar la respuesta
}).listen(3000); //Puerto en el que se escucha