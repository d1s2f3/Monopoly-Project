// src/logic/boardColors.js

// Definimos la paleta estándar para reutilizarla
const PALETA = {
  GO: '#15fff3',        // Color especial para Salida
  BROWN: '#8B4513',    // Mediterraneo / Baltico
  LIGHT_BLUE: '#87CEEB',
  PINK: '#FF69B4',
  ORANGE: '#FFA500',
  RED: '#FF0000',
  YELLOW: '#FFFF00',
  GREEN: '#008000',
  DARK_BLUE: '#00008B',
  ESTACION: '#2C2C2C',  // Gris muy oscuro para trenes
  PUBLIC_SERVICE: '#A9A9A9',  // Gris claro para Electricidad/Agua
  SPECIAL: '#b700ff',  // Community Chest, Chance...
  TAX: '#d84704',         // Impuestos
  ESQUINA: '#D3D3D3'    // Cárcel, Parking, Ir a Cárcel
};

// Mapa EXACTO de las 40 casillas (Indices 0 a 39)
export const boardColors = [
  // LADO 1 (ABAJO - De derecha a izquierda)
  PALETA.GO,           // 0: GO (Salida)
  PALETA.BROWN,       // 1: Mediterranean Ave
  PALETA.SPECIAL,     // 2: Community Chest
  PALETA.BROWN,       // 3: Baltic Ave
  PALETA.TAX,     // 4: Income Tax
  PALETA.ESTACION,     // 5: Reading Railroad
  PALETA.LIGHT_BLUE,   // 6: Oriental Ave
  PALETA.SPECIAL,     // 7: Chance
  PALETA.LIGHT_BLUE,   // 8: Vermont Ave
  PALETA.LIGHT_BLUE,   // 9: Connecticut Ave

  // LADO 2 (IZQUIERDA - De abajo a arriba)
  PALETA.ESQUINA,      // 10: Just Visiting / Jail
  PALETA.PINK,         // 11: St. Charles Place
  PALETA.PUBLIC_SERVICE,     // 12: Electric Company
  PALETA.PINK,         // 13: States Ave
  PALETA.PINK,         // 14: Virginia Ave
  PALETA.ESTACION,     // 15: Pennsylvania Railroad
  PALETA.ORANGE,      // 16: St. James Place
  PALETA.SPECIAL,     // 17: Community Chest
  PALETA.ORANGE,      // 18: Tennessee Ave
  PALETA.ORANGE,      // 19: New York Ave

  // LADO 3 (ARRIBA - De izquierda a derecha)
  PALETA.ESQUINA,      // 20: Free Parking
  PALETA.RED,         // 21: Kentucky Ave
  PALETA.SPECIAL,     // 22: Chance
  PALETA.RED,         // 23: Indiana Ave
  PALETA.RED,         // 24: Illinois Ave
  PALETA.ESTACION,     // 25: B. & O. Railroad
  PALETA.YELLOW,     // 26: Atlantic Ave
  PALETA.YELLOW,     // 27: Ventnor Ave
  PALETA.PUBLIC_SERVICE,     // 28: Water Works
  PALETA.YELLOW,     // 29: Marvin Gardens

  // LADO 4 (DERECHA - De arriba a abajo)
  PALETA.ESQUINA,      // 30: Go To Jail
  PALETA.GREEN,        // 31: Pacific Ave
  PALETA.GREEN,        // 32: North Carolina Ave
  PALETA.SPECIAL,     // 33: Community Chest
  PALETA.GREEN,        // 34: Pennsylvania Ave
  PALETA.ESTACION,     // 35: Short Line
  PALETA.SPECIAL,     // 36: Chance
  PALETA.DARK_BLUE,  // 37: Park Place
  PALETA.SPECIAL,     // 38: Luxury Tax
  PALETA.DARK_BLUE   // 39: Boardwalk
];

export const boardLabels = {
  0: "GO", // GO
  10: "JAIL", // Cárcel
  20: "PARKING", // Parking
  30: "GO TO JAIL"    // Policía
};