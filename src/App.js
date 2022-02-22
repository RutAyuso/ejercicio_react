import './App.css';
import Header from './Header/Header';
import Contenido from './Contenido/Contenido';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React, { useState } from 'react';



function App() {
  const nomb = [
    {'nombre': 'rut' },
    {'nombre': 'rut' },{'nombre': 'rut' },{'nombre': 'rut' },{'nombre': 'rut' },{'nombre': 'rut' }]

  const tit = 'Hola';
  const [datos, setDatos] = useState({nombres:nomb, titulos: tit});

  //añadir nombres
  const anadir = (nombre)=>{
    datos.nombres.push(nombre);
    setDatos({
      titulos:datos.titulo,
      nombres:[ ...datos.nombres],
    });
  }

  const cambia = ()=>{
    
    setDatos({
      titulos:'adios',
      nombres:[ ...datos.nombres]
    });
  }




  return (
    <div className="App">
        <Router>
        <Header titles={datos.titulos} diferente={cambia}/>
          <Routes>
            <Route path='/' element={<Contenido nombres={datos.nombres} anadir={anadir} />}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;

