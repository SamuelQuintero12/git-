function validatePassword(password) {
    if (typeof password !== 'string') {
      return false;
    }
    if (password.length < 8 || password.includes(' ')) {
      return false;
    }
    if (!/[A-Z]/.test(password)) {
      return false;
    }
    if (!/[0-9]/.test(password)) {
      return false;
    }
    return true;
  }

console.log(validatePassword('hello123')); 
console.log(validatePassword('Hello123')); 
console.log(validatePassword('Hello123456')); 
console.log(validatePassword('Hello 123'));