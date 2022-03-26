function getDatas(){
    return fetch(`https://dev9.deftower.com/wp_newplugintest/wp-content/uploads/2000/01/teamScores.json`)
    .then((data) => data.json())
    .catch((err) => console.log(err))
}

async function showLeagueOpsDatas(){
    try{
        const datas = await getDatas();
        console.log(`${datas}`);
    }catch(err){
        console.log(`Erro: ${err}`)
    }
}

showLeagueOpsDatas();