/* Number */

console.log("************ NUMBER ************");

var number = 2;
console.log(typeof number); //Number

number = 2.523;
console.log(typeof number); //Number

var textoComNumero = '523';

console.log(typeof textoComNumero); // String e não Number
console.log(textoComNumero + 12); // '52312'

console.log(NaN);
console.log(typeof NaN); // Number
console.log(typeof +Infinity); // Number
console.log(typeof -Infinity); // Number


/* Strings */

console.log("************ STRINGS ************");

var nome = "Victor";
var sobrenome = 'Hugo Costa Osses';
var nomeCompleto = nome + sobrenome;

console.log(typeof nome);
console.log(typeof sobrenome);
console.log(typeof nomeCompleto);

console.log(nomeCompleto + ". 19 anos");

document.write('Escrevendo no "documento" com o seguinte comando: document.write()');


/* Boolean */

console.log("************ BOOLEAN ************");

var booleano = true;

console.log(typeof booleano);

var booleano = false;

console.log(typeof booleano);

console.log(1 > 0);

console.log(1 < 0);


/* NULL && UNDEFINED */

console.log("************ NULL && UNDEFINED ************");

// Hoisting - içamento: A declaração de variáveis e funções são levadas ao topo do código antes dele ser executado
console.log(indefinido); // undefined
console.log(number); // undefined

var indefinido; // Variável declarada, mas não inicializada
var nulo = null;
var number = 5;

console.log(typeof indefinido);
console.log(typeof nulo);


/* OBJECT */

console.log("************ OBJECT ************");

var pessoa = {
    nome: 'Victor',
    idade: 19,
    altura: 1.80,
    estaEstudando: true
}

console.log(pessoa);
console.log(typeof pessoa);

console.log("O meu nome é " + pessoa.nome);

pessoa.novaPropriedade = 'valor';


/* ARRAY */

var arr = [1, 4.5, "Matheus", true , {teste: 1}, [20]];

console.log(typeof arr) // Object
console.log(arr);
console.log(arr[2]);

arr[6] = 'novo elemento';
arr[0] = 2;



