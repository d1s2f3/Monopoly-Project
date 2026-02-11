import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CamaraJuego1() {
  useFrame((state) => {
    

    // Aplicamos la posición a la cámara
    state.camera.position.set(0, 4, 6.5)

    // Obligamos a la cámara a mirar al centro de la mesa
    // El centro está en y=0.5 aproximadamente
    state.camera.lookAt(0, 0, 0)
    
    // Actualizamos la matriz de la cámara para que el cambio sea efectivo
    state.camera.updateProjectionMatrix()
  })

  return null // No renderiza objetos, solo ejecuta lógica
}