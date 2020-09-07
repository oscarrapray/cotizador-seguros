import React from 'react'
import { primerMayuscula } from '../helper';

const Resumen = ({datos}) => {
// extraer de datos
const {marca, year, plan} = datos;

if(marca === '' || year === '' || plan === '' ) return null;

    return(
        <div>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { primerMayuscula(marca) } </li>
                <li>Plan: {primerMayuscula(plan)} </li>
                <li>Año del Auto: {year} </li>
            </ul>
        </div>
    )
}

export default Resumen 