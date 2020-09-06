import React from 'react'
const Resumen = ({marca,year,plan}) => {

    return(
        <div>
            {
                marca &&
                <div>
                    <h1>Resumen de la Cotizacion</h1>
                    <h1>{`Marca: ${marca}`}</h1>
                    <h1>{`Plan :${plan}`}</h1>
                    <h1>{`año: ${year}`}</h1>
                </ div>
            }
        </div>
    )
}

export default Resumen 