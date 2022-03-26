var el = document.querySelector('#input');

el.addEventListener('keydown', function(event){
    console.log('Apertou o enter');
    if(event.key === 'Enter'){
        el.style.backgroundColor = 'yellow';
    }
});

el.addEventListener('keyup', function(){
    console.log('Soltou o enter');
    el.style.backgroundColor = 'white';
});
