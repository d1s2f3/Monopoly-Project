import CamaraJuego1 from "./camaras/camaraJuego1";
import { useState } from "react";
import TiraDados from "./acciones/tirarDados";
import Ficha from "./objects/ficha";
import Dado from './objects/dado'
import Carta from './objects/carta'
import GameMenu from "./menu/gameMenu";
import { Html } from '@react-three/drei'

export default function GameMaster() {
    const [resultado, setResultado] = useState(null);
    const [datosJugadores, setDatosJugadores] = useState([
    { nombre: 'Jugador 1', dinero: 1500 },
    { nombre: 'Jugador 2', dinero: 1250 }
    ]);
    const [tirar, setTirar] = useState(false);
    return (
    <group>
        <CamaraJuego1 />
        {!tirar && (
                <Html fullscreen> 
                    <GameMenu 
                        jugadores={datosJugadores} 
                        onRoll={() => {
                            setTirar(true);
                            // Aumenta el tiempo para que de tiempo a ver la animación de 3s
                            setTimeout(() => setTirar(false), 4000); 
                        }} 
                    />
                </Html>
            )}
             
        <Ficha color="blue" position={[0.5, 0.65, 0.5]} />
        <Ficha color="green" position={[-0.5, 0.65, 0.5]} />
        <Ficha color="#ffcc00" position={[0, 0.65, -0.5]} />

        <Carta position={[-0.3, 0.65, -0.1]} rotation={[-Math.PI / 2, 0, 0.5]} />
        {tirar && <TiraDados 
            numeroDeseado={5} 
            alTerminar={(n) => {
                console.log(`El dado se ha detenido en el número ${n}`);
                setResultado(n);
<<<<<<< HEAD
            }} />}
=======
            }} 
        />
>>>>>>> 804c016f4e85708b4782e974e112b3a6aa376c53
    </group>
  
  
    );
}
