import React from 'react'
import * as THREE from 'three'

export default function Habitacion() {
  return (
    <group>
      {/* Suelo */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.5, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#333333" />
      </mesh>

      {/* Pared Fondo */}
      <mesh position={[0, 4.5, -10]}>
        <boxGeometry args={[20, 10, 0.1]} />
        <meshStandardMaterial color="#e0e0e0" />
      </mesh>

      {/* Pared Izquierda */}
      <mesh position={[-10, 4.5, 0]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[20, 10, 0.1]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>
       
       {/* Pared Frente */}
      <mesh position={[0, 4.5, 10]}>
        <boxGeometry args={[20, 10, 0.1]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>

      {/* Pared Derecha */}
      <mesh position={[10, 4.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[20, 10, 0.1]} />
        <meshStandardMaterial color="#d0d0d0" />
      </mesh>

      {/* Techo */}
      <mesh position={[0, 9.5, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[20, 20]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>
    </group>
  )
}