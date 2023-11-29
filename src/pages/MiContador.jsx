import React, { useState } from 'react';
import Boton from '../components/Boton'

function MiContador() {
    const [contador, setContador] = useState(0);
    const incrementarContador = () => {
        setContador(contador + 1);
    };
    const decrementarContador = () => {
        setContador(contador - 1);
    };
    return (
        <div>
            <h2>Contador: {contador}</h2>
            <Boton onclick={incrementarContador} signo="+"/>
            <Boton onclick={decrementarContador} signo="-"/>
        </div>
    )
}

export default MiContador