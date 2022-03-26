var el = document.createElement('h3');

el.classList = 'testando-classe';

var texto = document.createTextNode('Este é o texto desse elemento');

el.appendChild(texto);

// selecionando o elemento que quero trocar
var title = document.querySelector('#title');

// selecionando o pai do elemento que quero trocar
var body = title.parentNode(); // Pega o elemento pai. Recomendado, pois vai que o elemento pai muda!

pai.replaceChild(el, title); // title é trocado por el