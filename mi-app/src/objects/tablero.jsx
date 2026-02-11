import React from 'react'

export default function Tablero() {
  return (
    <mesh position={[0, 0.6, 0]}> {/* Un poco más alto que el tablero de la mesa */}
      <boxGeometry args={[1.5, 0.05, 1]} />
      <meshStandardMaterial color="#d2b48c" /> {/* Color madera clara */}
    </mesh>
  )
}