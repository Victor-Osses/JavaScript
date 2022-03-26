var frutas = ['Laranja', 'Maça', 'Pera', 'Limão'];

var listaUl = document.createElement('ul');

var body = document.getElementsByTagName('body');

console.log(body[0]);

// appendChild: adiciona um elemento filho
body[0].appendChild(listaUl);

var listaNoBody = document.getElementsByTagName('ul');

for(var i = 0; i < frutas.length; i++){
	var liFor = document.createElement('li');

	var textoLi = document.createTextNode(frutas[i]);

	liFor.appendChild(textoLi);

	listaNoBody[0].appendChild(liFor);
}

