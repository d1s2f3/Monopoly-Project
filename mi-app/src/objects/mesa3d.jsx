
import React from 'react'
import Tablero from './tablero'
import { useTexture } from '@react-three/drei'
import Dado from './dado'
import Carta from './carta'




export default function Mesa({ position = [0, 0, 0] }) {
  const texture = useTexture('/marble.jpg')
  const texturewood = useTexture('/wood.jpg')
  return (
    <group position={position}>
      {/* Estructura principal de la mesa */}
      <mesh position={[0, 0.5, 0]}>
        <boxGeometry args={[3, 0.15, 2]} />
        <meshStandardMaterial map = {texture}/>
      </mesh>

      {/* Patas (posiciones relativas al grupo de la mesa) */}
      <mesh position={[1.3, 0, 0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood} /></mesh>
      <mesh position={[-1.3, 0, 0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood} /></mesh>
      <mesh position={[1.3, 0, -0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood} /></mesh>
      <mesh position={[-1.3, 0, -0.8]}><boxGeometry args={[0.1, 1, 0.1]} /><meshStandardMaterial map = {texturewood}/></mesh>
      
      {/* La Mesa decide poner el Tablero sobre su superficie (y=0.5 + grosor) */}
      <Tablero />

      {/* Colocamos el dado sobre el tablero (y=0.68 aprox) */}
      <Dado position={[0.4, 0.68, 0.2]} rotation={[0.4, 0.5, 0]} />
      
      {/* Colocamos la carta al lado */}
      <Carta position={[-0.3, 0.65, -0.1]} rotation={[-Math.PI / 2, 0, 0.5]} />
    </group>
  )
}