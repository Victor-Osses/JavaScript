let x = 5; // var x = 5;

const y = 10; // Valor imutável

x = 12;

console.log(x); // 12
console.log(y); // 10

if(true){

	let x = 20; // Define x com escopo local dentro do If

	console.log(x); // 20

	const y = 50; 

	console.log(y); // 50. Define y com escopo local dentro do If

	const z = 25; 

}

console.log(x); // 12
console.log(y); // 10
// console.log(z); Z não é definido fora do If

for(let x = 0; x < 10; x++){
	console.log(x);
}
