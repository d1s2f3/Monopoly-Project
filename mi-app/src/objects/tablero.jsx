import React from 'react'
import { useTexture } from '@react-three/drei'

export default function Tablero() {
  // Carga la textura desde la carpeta public (asegúrate de que wood.jpg esté ahí)
  const texture = useTexture('/wood.jpg')

  return (
    <mesh position={[0, 0.6, 0]}> {/* Un poco más alto que el tablero de la mesa */}
      <boxGeometry args={[6, 0.05,4]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}
