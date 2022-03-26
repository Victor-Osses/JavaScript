/*
    O que caracteriza um callback é passar uma função como argumento
    para outra função que é executada após o resultado de uma determinada operação
*/

// Essa é a versão síncrona do callback
function exibir(num){
    console.log('A operação resultou em: ' + num);
}

function soma(a, b, callback){
    var op = a + b;
    callback(op);
}

// callback as cb
function multiplicacao(a, b, cb){
    var op = a * b;
    cb(op);
}

soma(2, 2, exibir);

multiplicacao(2, 4, exibir);