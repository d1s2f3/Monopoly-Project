import React from 'react'

export default function Carta({ position = [0, 0, 0], rotation = [-Math.PI / 2, 0, 0] }) {
  return (
    <mesh position={position} rotation={rotation} receiveShadow>
      {/* Proporción de carta: 0.5 de ancho por 0.7 de alto, casi sin grosor */}
      <boxGeometry args={[0.2, 0.1, 0.01]} />
      <meshStandardMaterial color="#fdf5e6" />
    </mesh>
  )
}