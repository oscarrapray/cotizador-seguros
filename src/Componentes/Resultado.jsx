import React from 'react'
import {obtenerDiferenciaAnio, calcularMarca, obtenerPlan} from '../helper';

const Resultado = ({marca,year,plan}) => {  
    // Agregar una base de 2000, 
    let resultado = 2000;
    // Obtener la diferencia de años y 
    const diferencia = obtenerDiferenciaAnio(year);

    // por cada año restar el 3% al valor del seguro
    resultado -= ((diferencia * 3) * resultado ) / 100;

    // Americano 15% Asiatico 5% y europeo 30% de incremento al valor actual
    resultado = calcularMarca(marca) * resultado;

    // el plan del auto, el básico incrementa el valor 20% y cobertura completa 50%
    let incrementoPlan = obtenerPlan(plan);

    // dependiendo del plan incrementar
    resultado =  parseFloat( incrementoPlan * resultado).toFixed(2); 
    return (
        <>
        {
            plan &&
            <div>
                 <h1>Precio Cotizacion</h1>
                 <p>{`Precio :${resultado}`}</p>
             </div>
        }
        </>
    )
}

export default Resultado