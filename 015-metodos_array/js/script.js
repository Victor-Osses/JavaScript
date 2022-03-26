// length

var arr = [1, 2, 3, 4, 5];

console.log(arr.length); // 5


// push

arr.push(6); // Adiciona um elemento na última posição do array

console.log(arr);


// pop

arr.pop(); // Remove o último elemento do array

console.log(arr);


// unshift

arr.unshift(0); // Adiciona um elemento no inicio do array

console.log(arr);


// shift

arr.shift(0); // Remove o primeiro elemento do array

console.log(arr);


// Último elemento do array
console.log(arr[arr.length - 1]);


// isArray

console.log(Array.isArray(arr));


// splice

arr.splice(2, 0, 999); // Adiciona o número 999 na posição 2 e elimina 0 elementos

arr.splice(4, 1, 899); // Adiciona o número 899 na posição 4 e elimina o antigo elemento nessa posição

arr.splice(4, 1); // Remove o elemento na quarta posição

console.log(arr); 


// IndexOf

console.log(arr.indexOf(4)) // Retorna o inídice do elemento especificado


// join - Transforma um array em uma string

var arr2 = ["O", "rato", "roeu", "a", "roupa"];

console.log(arr2.join(" "));


// reverse

console.log(arr2.reverse());