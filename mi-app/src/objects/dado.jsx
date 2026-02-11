import React from 'react'
import {forwardRef, useMemo } from 'react'
import {generarMaterialesDado} from './texturaDado'



const Dado = forwardRef(({ position, rotation }, ref) => {
  const materiales = useMemo(() => generarMaterialesDado(), []);

  return (
    <mesh 
      ref={ref} // <--- Sin esto, la animación no funciona
      position={position} 
      rotation={rotation} 
      castShadow 
      material={materiales}
    >
      <boxGeometry args={[0.2, 0.2, 0.2]} />
    </mesh>
  );
});

export default Dado;