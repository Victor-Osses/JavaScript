var xhr = new XMLHttpRequest();

console.log(xhr);

xhr.responseType = 'text'; // json, document, text, html etc. Por default == text
xhr.onreadystatechange = function(){
    // readyState == 4 -> requisição completa e resposta retornada
    // status == 200 -> OK!
    if(xhr.readyState == 4 && xhr.status == 200){
        var dataObj = JSON.parse(xhr.response);

       dataObj.comments.map((comment)=>{
            console.log(comment.content);
        })
    }
}

// Estou requisitado dados de um arquivo db.json que eu tenho no GitHub
xhr.open('GET', 'https://my-json-server.typicode.com/Victor-Osses/json-server/db');

// Executa o verbo HTTP, que nesse caso é GET
xhr.send();

// Para realizar uma inserção: 

//xhr.open('POST', 'https://my-json-server.typicode.com/Victor-Osses/json-server/db');

//xhr.send(obj); Sendo que obj contém um JSON
