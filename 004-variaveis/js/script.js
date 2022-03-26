var teste = 1;

nome = "João"; // Variável com escopo global. Cuidado! Ela pode sobrescrever outra variável em outro escopo

console.log(teste);

teste = 'Victor';

console.log(teste);

console.global(nome);

// var @nome = 'José'; Variáveis não podem ser nomeados com caracteres especiais, com excessão de $ e _

var $nome = 'Maria';
var $_nome = 'José';

// var 4nome = 'Carlos'; Variáveis não podem começar com números

var meuPrimeiroNome = 'Victor' // Padrão camelCase

let testando = 1;
const ola = 2;

consol.log(testando);
console.lg(ola);

var meuNome; // Variável sem valor. Ela é undefined até receber um valor

meuNome = 'Victor';

//Existem palavras reservadas que não podem ser utilizadas para declarar nomes de variáveis

/*
var false = 1;
var true = 2;
var function = 3;
var var = 4;
var const = 5;
var let = 6;
var class = 7;
etc...
*/