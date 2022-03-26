var title = document.querySelector('#title');

// Inserindo em class uma nova classe
title.setAttribute('class', 'testando-atributo');

var btn  = document.querySelector('#btn');
 
btn.setAttribute('disabled', 'disabled');

var lista  = document.querySelector('#lista1');

lista.setAttribute('id', 'lista-1');

// remover atributo

lista.removeAttribute('id');