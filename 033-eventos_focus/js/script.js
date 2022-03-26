var el = document.querySelector('#input');
var value;

el.addEventListener('focusin', function(){
    value = setInterval(function(){
        if(el.value.length > 0){
            console.log('Você digitou: ' + el.value);
        }
    }, 100);
})

el.addEventListener('focusout', function(){
    clearInterval(value);
})