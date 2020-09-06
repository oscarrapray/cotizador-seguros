import React from 'react';
import Header from './Componentes/Header'
import Formulario from './Componentes/Formulario';

const App = () =>{
  return(
    <div className="contenedor">
      <Header titulo = 'Cotizador de Seguro de Auto' />
      <Formulario/>
    </div>
  )
}

export default App;
