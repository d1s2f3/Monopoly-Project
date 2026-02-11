import React from 'react'

export default function Dado({ position = [0, 5, 0], rotation = [0, 0, 0] }) {
  return (
    <mesh position={position} rotation={rotation} castShadow>
      {/* Un dado estándar mide aprox 0.2 unidades en nuestra escala */}
      <boxGeometry args={[0.07, 0.07, 0.07]} />
      <meshStandardMaterial color="white" />
    </mesh>
  )
}