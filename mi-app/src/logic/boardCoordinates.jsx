// src/logic/boardCoordinates.js

const LADO = 10;
const SEPARACION = 0.55; 
const OFFSET = (LADO * SEPARACION) / 2;

// Esta función devuelve un array con las 40 coordenadas exactas
export const getBoardCoordinates = () => {
  const coords = [];

  for (let i = 0; i < 40; i++) {
    let x = 0;
    let z = 0;

    if (i < 10) { // Abajo
      x = OFFSET - (i * SEPARACION);
      z = OFFSET;
    } else if (i < 20) { // Izquierda
      x = -OFFSET;
      z = OFFSET - ((i - 10) * SEPARACION);
    } else if (i < 30) { // Arriba
      x = -OFFSET + ((i - 20) * SEPARACION);
      z = -OFFSET;
    } else { // Derecha
      x = OFFSET;
      z = -OFFSET + ((i - 30) * SEPARACION);
    }
    
    // Guardamos la coordenada lista para usar
    coords.push({ id: i, position: [x, 0.65, z] });
  }
  return coords;
};