var el = document.querySelector('#div');

el.addEventListener('mouseover', function(){
    el.style.backgroundColor = 'yellow';
    document.querySelector('#new-text').classList.remove('hide');
});

el.addEventListener('mouseout', function(){
    el.style.backgroundColor = 'white';
    document.querySelector('#new-text').classList.add('hide');
});