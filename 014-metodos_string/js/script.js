// length
var nome = 'Victor';

console.log(nome.length); // 6


// indexOf - Retorna o indíce do primeiro caractere da palavra procurada

var frase = "O rato roeu a roupa do rei de roma";

console.log(frase.indexOf("roeu")) // 7


// slice - pega uma string no intervalo especificado

var roeu = frase.slice(7, 11); // roeu

console.log(roeu); // roeu


// replace

var novaFrase = frase.replace("roeu", "comeu");

console.log(novaFrase);


// toLowerCase e toUpperCase

console.log(novaFrase.toLowerCase()); 
console.log(novaFrase.toUpperCase());


// trim - remove espaços no inicio e fim da string

console.log(" espaço no início e fim da string ".trim());


// split - Transforma uma string em um array a partir de um separador

console.log(frase.split(" "));


// lastIndexOf

var fraseDois = "Eu quero a última palavra teste desta frase de teste";

console.log(fraseDois.indexOf("teste")); // Retorna o indíce inicial da primeira ocorrência da palavra teste

console.log(fraseDois.lastIndexOf("teste")) // Retorna o indíce inicial da última ocorrência da palavra teste