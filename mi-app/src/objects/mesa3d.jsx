
import React from 'react'
import Tablero from './tablero'
import { useTexture } from '@react-three/drei'





export default function Mesa({ position = [0, 0, 0] }) {
  const texture = useTexture('/marble.jpg')
  const texturewood = useTexture('/wood.jpg')
  return (
    <group position={position}>
      {/* Estructura principal de la mesa */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[7, 0.15, 7]} />
        <meshStandardMaterial map = {texture}/>
      </mesh>

      {/* Patas (posiciones relativas al grupo de la mesa) */}
      <mesh position={[3, 0, 1.5]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood} /></mesh>
      <mesh position={[-3, 0, 1.5]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood} /></mesh>
      <mesh position={[3, 0, -1.5]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood} /></mesh>
      <mesh position={[-3, 0, -1.5]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood}/></mesh>
      
      
      <Tablero />

    </group>
  )
}