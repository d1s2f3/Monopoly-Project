import React from 'react'

export function Ficha({ color = "red", position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Base de la ficha */}
      <mesh position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 0.1, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>

      {/* Cuerpo de la ficha */}
      <mesh position={[0, 0.2, 0]}>
        <coneGeometry args={[0.12, 0.5, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>

      {/* Cabeza de la ficha */}
      <mesh position={[0, 0.4, 0]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshStandardMaterial color={color} roughness={0.3} />
      </mesh>
    </group>
  )
}
export default Ficha;