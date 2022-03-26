function divisors(integer) {
    var listDivisors = [];
    const limite = 
  
    for(let i = 2; i <= integer / 2; i++){
        if(integer % i === 0){
          listDivisors.push(i);
        }
    }
  
   return listDivisors.length ? listDivisors : integer + ' is prime';
};

divisors(24); // Retorna uma lista com os divisores do número informado