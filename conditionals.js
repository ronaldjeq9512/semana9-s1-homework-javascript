const age = 18;

// aplicando condicional simple
if(age >= 18){
    console.log('eres un adulto')
}

// aplicando condicional multiple
if(age >= 18){
    console.log('eres un adulto');
} else if (age > 15) {
    console.log('eres un adolescente')
}else {
    console.log('eres un niño')
}

// También se puede hacer validación múltiple usando switch
switch (new Date().getDay()) {
    case 0:
      day = "Domingo";
      break;
    case 1:
      day = "Lunes";
      break;
    case 2:
       day = "Martes";
      break;
    case 3:
      day = "Miércoles";
      break;
    case 4:
      day = "Jueves";
      break;
    case 5:
      day = "Viernes";
      break;
    case 6:
      day = "Sábado";
}


// Tambien existe la condicional terciaria
const isAdult = age >= 18 ? true : false;

console.log(`La persona es mayor de edad? ${isAdult}`)