import React, {useState} from 'react'

function Contador(){
    const [cantidad, setCantidad] = useState(0)

    const handleIncrementar = ()=>{
        setCantidad(cantidad + 1)
    }
    const handleDecrementar = ()=>{
        setCantidad(cantidad - 1)
    }

    return(
        <>
        Contador
        <br />
        <p>Valor {cantidad}</p>
        <button onClick={handleIncrementar}>Increment</button>
        <button onClick={handleDecrementar}>Decrement</button>
        </>
        
    )
}

export default Contador