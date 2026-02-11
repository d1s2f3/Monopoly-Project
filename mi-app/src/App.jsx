import React from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import Habitacion from './objects/habitacion'
import Mesa from './objects/mesa3d'
import CamaraInicio from './camaras/camaraInicio' // <--- Importación

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#000' }}>
      <Canvas camera={{ fov: 45 }}>
        {/* Luces */}
        <ambientLight intensity={4} />
        <pointLight position={[0, 8, 0]} intensity={1.5} castShadow />
        
        {/* Escena */}
        <Habitacion />
        <Mesa position={[0, 0, 0]} />
        
        {/* Lógica de Cámara Animada */}
        <CamaraInicio />

        {/* Sombras proyectadas en el suelo */}
        <ContactShadows 
          position={[0, -0.49, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2.5} 
          far={4} 
        />
      </Canvas>
    </div>
  )
}

export default App