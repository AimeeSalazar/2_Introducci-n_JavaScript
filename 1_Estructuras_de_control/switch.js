let AnimalFavorito = prompt("¿Cuál es tu animal favorito?")

switch (AnimalFavorito) {
    case 'Perro':
    case 'Gato':
    case 'Peces':
      alert('Te gustan los animales normales');
      break;
    case 'Arañas':
    case 'Víboras':
    case 'Puercoespín':
      alert('Eres extremo');
      break;

    default:
      alert('¿Cómo que no te gustan los animales');
  }