// parseFloat(Number)

console.log(parseFloat('13.894'));
console.log(Number.parseFloat('12.649'));

// parseInt(Number)

console.log(parseInt('10.34'));
console.log(Number.parseInt(12.999));

// .toFixed(X) - exibe X casas decimais

console.log(6.74312567832.toFixed(1));
console.log(5.3.toFixed(50));

// isNaN(Value) - Retorna true para valores não numéricos e false para valores numéricos

console.log(isNaN("texto")); // true
console.log(isNaN(12)); // false
console.log(isNaN('12')); // false, pois converte a String para tipo numérico

// MAX_VALUE e MIN_VALUE - Maior e menor valor que o JS aceita

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);