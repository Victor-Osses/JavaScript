console.log('Antes do setTimeout');

/*
Assíncrono, ou seja, o JS não bloqueia o código, ele contínua executando os comandos síncronos enquanto
a resposta de 2 segundos do setTimeout não é recebida. 

Esses são exemplos de callbacks assíncronas, pois estou passando uma função como argumento para outra função
que só vai ser executada após uma certa resposta que, nesse caso, é uma delay de 3 segundos
*/
setTimeout(function(){
    console.log('Testando o setTimeout');
}, 3000)

console.log('Depois do setTimeout');

setInterval(function() {
    console.log('Testando o setInterval');
}, 3000)