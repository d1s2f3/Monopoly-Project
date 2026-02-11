
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, ContactShadows, Environment } from '@react-three/drei'
import Habitacion from './objects/habitacion'
import Mesa from './objects/mesa3d'

function App() {
  return (
    <div style={{ width: '100vw', height: '100vh', background: '#111' }}>
      <Canvas camera={{ position: [5, 5, 10], fov: 45 }}>
        <ambientLight intensity={4} />
        <pointLight position={[0, 8, 0]} intensity={3} />
        <pointLight position={[10, 8, 10]} intensity={3} />
        
        <Habitacion />
        
        {/* Podemos colocar la mesa donde queramos en la habitación */}
        <Mesa position={[0, 0, 0]} />
        

        <OrbitControls />
        <ContactShadows opacity={0.4} scale={20} blur={2} far={4.5} />
      </Canvas>
    </div>
  )
}

export default App
