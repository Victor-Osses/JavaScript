// sintaxe

function primeiraFuncao(){

    return new Promise((resolve) => {
        // Simulando uma requisição a um servidor externo
        setTimeout(() => {
            console.log('Esperou isso aqui!');
            resolve();
        }, 1000)
    })

}

async function segundaFuncao(){
    console.log('Iniciou');

    // primeiraFuncao(); Sem o await ele vai exibir no console primeiro 'Iniciou', depois 'Terminou' e depois
    // 'Esperou isso aqui!'

    await primeiraFuncao();

    console.log('Terminou');
}

segundaFuncao()

// Exemplo prático

function getColor(id){
    return fetch(`https://reqres.in/api/user?id=${id}`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function showColorName(id){
    try{
        const color = await getColor(id)
        console.log(`O nome da cor é: ${color.data.name}`)
    }catch(err){
        console.log(`Erro: ${err}`)
    }
}

showColorName(2)