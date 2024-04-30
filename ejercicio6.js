function esPrimo(numero) {
    if (numero <= 1) {
      return false;
    }
    for (let i = 2; i < numero; i++) {
      if (numero % i === 0) {
        return false;
      }
    }
    return numero !== 1;
  }

console.log(esPrimo(2));
console.log(esPrimo(3)); 
console.log(esPrimo(4)); 
console.log(esPrimo(17)); 
console.log(esPrimo(100)); 