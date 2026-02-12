import React, { useRef, useState, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Dado from '../objects/dado';

export function TiraDados({ numeroDeseado, alTerminar }) {
  const dadoRef = useRef();
  const [lanzando, setLanzando] = useState(true);
  
  // Mapeo de caras a rotaciones finales
  const rotacionesCaras = {
    1: [0, 0, Math.PI / 2],      // El 2 es -X, rotamos en Z para subirlo 
    2: [0, 0, -Math.PI / 2],     // El 1 es +X, rotamos en Z inverso
    3: [0, 0, 0],                // El 3 es +Y, ya está arriba
    4: [Math.PI, 0, 0],         // El 4 es -Y, giro de 180° para subirlo  
    5: [-Math.PI / 2, 0, 0],     // El 5 es +Z, rotamos en X
    6: [Math.PI / 2, 0, 0],
  };

  useEffect(() => {
    // A los 3 segundos, detenemos el giro
    const timer = setTimeout(() => {
      setLanzando(false);
      if (alTerminar) alTerminar(numeroDeseado);
    }, 500);
    return () => clearTimeout(timer);
  }, [numeroDeseado]);

  useFrame((state, delta) => {
    if (!dadoRef.current) return;

    if (lanzando) {
      // Giro rápido y aleatorio
      dadoRef.current.rotation.x += delta * 20;
      dadoRef.current.rotation.y += delta * 15;
      dadoRef.current.rotation.z += delta * 10;
      
      // Elevación opcional (efecto salto)
      dadoRef.current.position.y = 1 + Math.abs(Math.sin(state.clock.elapsedTime * 10)) * 0.5;
    } else {
      // Transición suave (Lerp) a la posición final
      const destino = rotacionesCaras[numeroDeseado];
      const targetRotation = new THREE.Euler(...destino);
      const targetQuaternion = new THREE.Quaternion().setFromEuler(targetRotation);
      
      dadoRef.current.quaternion.slerp(targetQuaternion, 0.1);
      dadoRef.current.position.y = THREE.MathUtils.lerp(dadoRef.current.position.y, 0.75, 0.1);
    }
  });

  return <Dado ref={dadoRef} position={[0, 1.5, 0]} />;
}
export default TiraDados;