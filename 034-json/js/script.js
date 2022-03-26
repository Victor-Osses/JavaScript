// Objeto JS comum !== JSON

// Aqui temos um array de objetos
const objs = [
    {
        nome: 'Victor',
        idade: 19,
        esta_estudando: true,
        detalhes_profissao : {
            profissao: 'estudante',
            empresa: 'empresa X'
        },
        hobbies : ['Programar', 'Comer', 'Jogar']
    },
    {
        nome: 'João',
        idade: 25,
        esta_estudando: false,
        detalhes_profissao : {
            profissao:  null,
            empresa: null
        },
        hobbies : ['Jogar']
    },
]

// Objeto JS comum
console.log(objs);

// Converte objeto JS para um JSON string
const jsonData = JSON.stringify(objs);
console.log(jsonData);
console.log(typeof jsonData);

// Converter JSON string para Objeto JS
const objData = JSON.parse(jsonData);
console.log(objData);
console.log(typeof objData);

objData.map((pessoa) => {
    console.log(pessoa.nome);
})

// Posso fazer a requisição de um arquivo JSON local ou externo usando AJAX ou Promises