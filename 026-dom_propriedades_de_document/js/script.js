console.log(document.body); // Retorna o body do documento
console.log(document.head); // Retorna o head do documento
console.log(document.links); // Retorna todos os links do documento

document.links[0].textContent = 'Instagram';

console.log(document.URL); // Retorna a URL
console.log(document.title); // Retorna o title do documento
document.title = 'DOM é legal';