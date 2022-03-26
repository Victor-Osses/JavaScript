var title = document.querySelector('#title');

title.style.color = 'red'; // Sobrescreve a estilização
title.style.backgroundColor = 'yellow';

// Adicionando vários estilos (substitui o inline que inseri antes)
title.style.cssText = 'text-decoration: underline; font-weight: bold'