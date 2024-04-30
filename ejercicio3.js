function divideWithoutDividing(dividend, divisor) {
    if (divisor > dividend) {
      return {quotient: 0, remainder: dividend};
    }
     // quotient cociente remainder resto 
    let quotient = 0;
    let remainder = dividend;
  
    while (remainder >= divisor) {
      remainder -= divisor;
      quotient++;
    }
  
    return {quotient: quotient, remainder: remainder};
  }

  console.log(divideWithoutDividing(12, 5));
// Output: { quotient: 2, remainder: 2 }