function calcOperations(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
      throw new Error('Both inputs must be numbers');
    }
  
    const sum = (+num1 + +num2).toFixed(2);
    const diff = (+num1 - +num2).toFixed(2);
    const prod = (+num1 * +num2).toFixed(2);
    const quot = num2 !== 0 ? (+num1 / +num2).toFixed(2) : 'Undefined';
  
    return { sum, diff, prod, quot };
  }