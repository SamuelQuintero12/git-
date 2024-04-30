function countCharacters(str) {
    let letterCount = 0;
    let numberCount = 0;
    let spaceCount = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z') {
        letterCount++;
      } else if (str[i] >= '0' && str[i] <= '9') {
        numberCount++;
      } else if (str[i] === ' ') {
        spaceCount++;
      }
    }
  
    return {
      letterCount,
      numberCount,
      spaceCount
    };
  }
  
  const inputString = "HOLA AMIGOS COMO ESTAN YO 34 VECES MEJOR";
  const result = countCharacters(inputString);
  console.log(result);

  