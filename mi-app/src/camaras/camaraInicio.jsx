import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

export default function CamaraInicio() {
  useFrame((state) => {
    // Configuramos la velocidad y el radio de giro
    const tiempo = state.clock.getElapsedTime() * 0.4
    const radio = 8
    const altura = 4

    // Calculamos las coordenadas x y z para el movimiento circular
    const x = Math.cos(tiempo) * radio
    const z = Math.sin(tiempo) * radio

    // Aplicamos la posición a la cámara
    state.camera.position.set(x, altura, z)

    // Obligamos a la cámara a mirar al centro de la mesa
    // El centro está en y=0.5 aproximadamente
    state.camera.lookAt(0, 0.5, 0)
    
    // Actualizamos la matriz de la cámara para que el cambio sea efectivo
    state.camera.updateProjectionMatrix()
  })

  return null // No renderiza objetos, solo ejecuta lógica
}