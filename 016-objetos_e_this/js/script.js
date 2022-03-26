console.log(this);

alert('Olá, faço parte do objeto Window');
this.alert('Essa é a prova que eu faço parte do objeto Window');

var teste = 5; // Variáveis são atributos do objeto Window

console.log(this.teste);
console.log(teste);

let pessoa = {
    nome: 'Victor',
    idade: 19,
    falar: function(){
        console.log("Olá, tudo bem?");
    },
    soma: function(a, b){
        return a + b;
    },
    dizerNome: function(){
        console.log('Meu nome é ' + this.nome);
    },
    aniversario: function(){
        this.idade += 1;
    }
};

console.log(pessoa.nome);

pessoa.falar();

console.log(pessoa.soma(1, 2));

console.log(pessoa.idade);

pessoa.aniversario();

console.log(this.pessoa.idade);