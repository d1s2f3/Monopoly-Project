import CamaraJuego1 from "./camaras/camaraJuego1";
import { useState } from "react";
import TiraDados from "./acciones/tirarDados";

import Dado from './objects/dado'
import Carta from './objects/carta'

export default function GameMaster() {
    const [resultado, setResultado] = useState(null);
    return (
    <group>
        <CamaraJuego1 />

    

        <Carta position={[-0.3, 0.65, -0.1]} rotation={[-Math.PI / 2, 0, 0.5]} />
        <TiraDados 
            numeroDeseado={5} 
            alTerminar={(n) => {
                console.log(`El dado se ha detenido en el número ${n}`);
                setResultado(n);
            }} 
/>
    </group>
  
  
    );
}
