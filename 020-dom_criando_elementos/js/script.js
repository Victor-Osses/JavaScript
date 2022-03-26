var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do novo paragrafo criado com DOM");

novoParagrafo.appendChild(texto);

console.log(novoParagrafo);

var body = document.querySelector('body');

body.appendChild(novoParagrafo);