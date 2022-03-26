/* IF */

var x = 2;
var y = 4;

if(true){
	console.log('teste do if');
}

if(x > y){
	console.log('x é maior que y');
}else if (y > x){
	console.log('y é maior que x');
}else{
	console.log('x == y');
}

// IF ternário
x >= 2 ? console.log('If ternário') : console.log('else ternário')