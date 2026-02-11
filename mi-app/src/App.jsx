
import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { ContactShadows } from '@react-three/drei'
import Habitacion from './objects/habitacion'
import Mesa from './objects/mesa3d'
import CamaraInicio from './camaras/camaraInicio' // <--- Importación
import CamaraJuego1 from './camaras/camaraJuego1' // <--- Importación
import './index.css' // Asegúrate de que el CSS esté importado
import './App.css' // Asegúrate de que el CSS esté importado
import MainMenu from './menu/mainMenu'
import GameMaster from './gameMaster'

function App() {
  const [juegoIniciado, setJuegoIniciado] = useState(false);

  return (
    <div className="canvas-container">

      {!juegoIniciado && <MainMenu onStart={() => setJuegoIniciado(true)} />}
      
      <Canvas camera={{ fov: 45 }}>
        {/* Luces */}
        <ambientLight intensity={4} />
        <pointLight position={[0, 8, 0]} intensity={1.5} castShadow />
        
        {/* Escena */}
        <Habitacion />
        <Mesa position={[0, 0, 0]} />
        
        {/* Lógica de Cámara Animada */}
        {/* <CamaraJuego1 /> */}
        <CamaraInicio />
        

        {/* Sombras proyectadas en el suelo */}
        <ContactShadows 
          position={[0, -0.49, 0]} 
          opacity={0.4} 
          scale={20} 
          blur={2.5} 
          far={4} 
        />
        {juegoIniciado && <GameMaster />}
      </Canvas>
    </div>
  )
}

export default App