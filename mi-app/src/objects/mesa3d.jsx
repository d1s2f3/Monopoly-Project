
import React from 'react'
import Tablero from '../tablero'

export default function Mesa({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      {/* Estructura principal de la mesa */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshStandardMaterial color="#6f4e37" />
      </mesh>

      {/* Patas (posiciones relativas al grupo de la mesa) */}
      <mesh position={[1.3, 0, 0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial color="#3d2b1f" /></mesh>
      <mesh position={[-1.3, 0, 0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial color="#3d2b1f" /></mesh>
      <mesh position={[1.3, 0, -0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial color="#3d2b1f" /></mesh>
      <mesh position={[-1.3, 0, -0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial color="#3d2b1f" /></mesh>
      
      {/* La Mesa decide poner el Tablero sobre su superficie (y=0.5 + grosor) */}
      <Tablero />
    </group>
  )
}