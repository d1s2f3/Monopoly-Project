import React from 'react';
// IMPORTANTE: Importamos el componente Text de drei
import { Text } from '@react-three/drei';

const ANCHO = 0.5;
const ALTO = 0.05;
const PROFUNDIDAD = 0.5;

// Recibimos la nueva prop 'texto'
export default function Casilla({ position, color, index, texto }) {
  // Lógica simple para que el texto se lea bien sobre colores oscuros/claros
  // Si es la casilla 30 (Ir a cárcel, que suele ser oscura) o la 0, ponemos texto blanco.
  const textColor = (index === 30 || index === 0) ? '#FFFFFF' : '#222222';

  return (
    <mesh
      position={position}
      userData={{ tipo: 'casilla', id: index }}
      receiveShadow
      castShadow
    >
      <boxGeometry args={[ANCHO, ALTO, PROFUNDIDAD]} />
      <meshStandardMaterial
        color={color}
        roughness={0.6}
      />

      {/* --- RENDERIZADO CONDICIONAL DEL TEXTO --- */}
      {/* Solo se renderiza si la prop 'texto' tiene contenido */}
      {texto && (
        <Text
          // Posición relativa: Lo subimos la mitad del alto + un poquito (0.01)
          // para que quede justo encima de la superficie de la casilla.
          position={[0, ALTO / 2 + 0.01, 0]}
          // Rotación: Lo giramos -90 grados en X para que quede plano sobre la mesa
          rotation={[-Math.PI / 2, 0, 0]}
          fontSize={0.08} // Tamaño de la fuente (ajústalo a tu gusto)
          color={'#000000'} // Color del texto
          anchorX="center" // Centrado horizontalmente
          anchorY="middle" // Centrado verticalmente en su caja
          textAlign="center" // Para manejar los saltos de línea (\n)
          font="/OpenSans-Bold.ttf" // Ruta al archivo de fuente
         
        >
          {texto}
        </Text>
      )}
      {/* ----------------------------------------- */}
    </mesh>
  );
}