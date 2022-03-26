var x = 1; // Global

var y = 2; /// Global

function teste(){
	var z = 3; // Local

	console.log(z);

	console.log(x); // Global
}

// console.log(z); Não é possível acessar a variável z

function teste(){
	var z = 4; // Local

	console.log(z);
}