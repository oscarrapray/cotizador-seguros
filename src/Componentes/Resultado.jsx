import React from 'react'


const Resultado = ({cotizacion}) => {  
    
    return (
        (cotizacion === 0) 
        ? <p>Elige marca, año y tipo de seguro</p> 
            :
            (
                <div>
                    <p>El total es: $ <span> {cotizacion} </span>  </p>
                </div>
            )
    )
}

export default Resultado