import React from 'react'

function Boton({ onclick, signo }) {
    return (
        <button onClick={onclick}>{signo}</button>
    )
}

export default Boton