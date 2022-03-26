// Crianção de promessa
const myPromise = new Promise((resolve, reject) => {

    const nome = 'Victor'; // Digamos que tenha vindo do banco de dados

    if(nome === 'Victor'){
        resolve('Usuário Victor encontrado!');
    }else{
        reject('O usuário Victor não foi encontrado!');
    }
})

// Executa a resposta a exibe a mensagem de retorno
myPromise.then((data) => {
    console.log(data);
})

// Encadeamento de then's
const myPromise2 = new Promise((resolve, reject) => {

    const nome = 'Victor'; // Digamos que tenha vindo do banco de dados

    if(nome === 'Victor'){
        resolve('Usuário Victor encontrado!');
    }else{
        reject('O usuário Victor não foi encontrado!');
    }
})

// Pode-se encadear quantos then's eu quiser
myPromise2.then((data) => {
    return data.toLowerCase();
}).then((stringModificada) => {
    console.log(stringModificada);
})

// Retorno do Catch

const myPromise3 = new Promise((resolve, reject) => {

    const nome = 'João'; // Digamos que tenha vindo do banco de dados

    if(nome === 'Victor'){
        resolve('Usuário Victor encontrado!');
    }else{
        reject('O usuário Victor não foi encontrado!');
    }
})

myPromise3.then((data) => {
    console.log(data);
}).catch((err) =>{
    console.log('Aconteceu um erro: ' + err);
})

// Resolver várias promessas
const p1 = new Promise((resolve, reject) => {
    // Simulando uma requisição externa para um servidor
    setTimeout(() => {
        resolve('P1 ok!')
    }, 2000) // Dois segundos para resolver a promessa
})

const p2 = new Promise((resolve, reject) => {
    resolve('P2 ok!')
})

const p3 = new Promise((resolve, reject) => {
    resolve('P3 ok!')
})

// As promessas p2 e p3 que são resolvidas de imediato vão esperar a p1
// Ou seja, Promise.all espera que todas as promessas sejam resolvidas para ser executado
const resolveAll = Promise.all([p1, p2, p3]).then((data) => {
    console.log(data);
})

console.log('Depois do all()');

// Varias promessas com race (corrida). A primeira que for resolvida tem sua mensagem de retorno enviada

const p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('P4 ok!')
    }, 2000)
})

const p5 = new Promise((resolve, reject) => {
    resolve('P5 ok!')
})

const p6 = new Promise((resolve, reject) => {
    resolve('P6 ok!')
})

// Nesse caso, a primeira promise a ser resolvida é a p5, pois ela ganha a corrida
const resolveAllRace = Promise.race([p4, p5, p6]).then((data) => {
    console.log(data);
})

// Fetch request na API do GitHub
// Fetch API

const userName = 'Victor-Osses';

fetch(`https://api.github.com/users/${userName}`, {
    method: 'GET',
    headers: {
        Accept: 'application/vnd.github.v3+json',
    },
}).then((response) =>{
    console.log(typeof response)
    console.log(response)
    return response.json()
}).then((data) => {
    console.log(data)
    console.log(`O meu nome de usuário no GitHub é: ${data.name}`)
    console.log(`O meu usuário do GitHub é: ${data.login}`)
}).catch((err) =>{
    console.log(`Houve algum erro: ${err}` )
})