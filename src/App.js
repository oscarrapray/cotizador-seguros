import React,{useState} from 'react';
import Header from './Componentes/Header';
import Formulario from './Componentes/Formulario'
import Resumen from './Componentes/Resumen';
import Resultado from './Componentes/Resultado';
import Spinner from './Componentes/Spinner';


const App = () =>{
  const [ resumen, guardarResumen] = useState({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
});

const [ cargando, guardarCargando] = useState(false);

// extraer datos
const { cotizacion, datos } = resumen;

  return(
    <div className = "container">
        <Header 
          titulo='Cotizador de Seguros'
        />

        <div className = "containerForm">
            <Formulario 
              guardarResumen={guardarResumen}
              guardarCargando={guardarCargando}
            />

            { cargando ? <Spinner /> : null }
            
            <Resumen 
              datos={datos}
            />

            { !cargando  ?
                <Resultado 
                  cotizacion={cotizacion}
                /> : null
            }
            
        </div>
    </div>
  )
}

export default App;
