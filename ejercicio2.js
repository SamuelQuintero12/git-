function greetUser(name) {
    if (name.length < 2 || !/^[A-Za-z]+$/.test(name) || name[0] !== name[0].toUpperCase()) {
      return "Lo siento, el nombre debe tener al menos 2 letras, sin números ni caracteres especiales, y comenzar con una mayúscula.";
    }
    return `Hola ${name}, bienvenido a mi programa.`;
  }

  console.log(greetUser('Edwin')); // Output: Hola Edwin, eres bienvenido a mi programa.