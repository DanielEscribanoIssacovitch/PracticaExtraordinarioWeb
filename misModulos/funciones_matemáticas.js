function sumar(n1, n2){
    return n1 + n2;
}

function restar(n1, n2){
    return n1 - n2;
}

function multiplicar(n1, n2){
    return n1 * n2;
}

//exportacion de modulos:
module.exports = {
    sumadenumeros: sumar,
    restadenumeros: restar,
    multiplicardenumeros: multiplicar
}