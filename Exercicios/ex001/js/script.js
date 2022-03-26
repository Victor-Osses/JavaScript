function getMiddle(s)
{
  const middle = s.length / 2;
 	
  // Ceil arrendoda para cima e floor para baixo
  return s.slice(Math.ceil(middle - 1), Math.floor(middle + 1)) 
}

console.log(getMiddle('testing')); // Retorna o caracte central