var btn = document.querySelector("#btn");
var maria = document.querySelector("p#maria");

// Aqui temos outro exemplo de callback
btn.addEventListener('click', function(){
    console.log(maria.classList.contains('aparecer'));
    if(maria.classList.contains('aparecer')){
        maria.setAttribute('class', 'sumir');
    }else{
        maria.setAttribute('class', 'aparecer');
    }
});

maria.addEventListener('dblclick', function(){
    maria.style.textTransform = "uppercase";
});

