import React, { useMemo } from 'react';
import Casilla from './casilla';
import { getBoardCoordinates } from '../logic/boardCoordinates';
// Importamos los colores Y AHORA TAMBIÉN LAS ETIQUETAS
import { boardColors, boardLabels } from '../logic/boardColors';

export default function Tablero(props) {

  const casillasData = useMemo(() => {
    const coords = getBoardCoordinates();

    return coords.map((c) => ({
      ...c,
      color: boardColors[c.id],
      // Añadimos la propiedad 'texto'. Si no existe en el mapa, será undefined.
      texto: boardLabels[c.id]
    }));
  }, []);

  return (
    <group {...props}>
      {casillasData.map((c) => (
        <Casilla
          key={c.id}
          index={c.id}
          position={c.position}
          color={c.color}
          // Pasamos la nueva prop al componente hijo
          texto={c.texto}
        />
      ))}
    </group>
  );
}