// Funções

function soma(a, b){
	return a + b;
}

console.log(soma(1, 2));


// Arrow function 

let myFunction = (a,b) => a * b;
console.log(myFunction(2, 5));


// definindo uma função anônima e invocando ela após a definição
// os 5 exemplos abaixo vão ser imediatamente invocadas

(function(){

})();

+function(){

}();

-function(){

}();

!function(){

}();
~function(){

}();


// Arrow function && Função anônima

(() => {
	console.log('Função anônima');
})();

console.log(subtracao(4, 2)); // Function hoisting

function subtracao(a, b){
	return a - b;
}


