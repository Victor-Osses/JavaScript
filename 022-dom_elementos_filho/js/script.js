var el1 = document.createElement('div');

el1.classList = 'div-criada';

var container = document.querySelector('#container');

// appendChild - insere um elemento filho

container.appendChild(el1);

// insertBefore - insere antes

var el2 = document.createElement('div');

el2.classList = 'div-before';

// elementoPai.insertBefore(elementoNovo, elementoDeReferencia)
container.insertBefore(el2, el1) // Dentro da div de container, eu insiro el2 antes de el1