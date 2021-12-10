import React from 'react';
import ReactDOM from 'react-dom';
import Home from '../src/componentes/home/Home';
import Login from '../src/componentes/ingresar/Login';
import Registrar from '../src/componentes/registrar/Registrar';
import Nosotros from '../src/componentes/nosotros/Nosotros';
import Contacto from '../src/componentes/contacto/Contacto';
import Recuperar from '../src/componentes/recuperar/Recuperar';
import App from '../src/App';


import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/Login" element={<Login/>} />
        <Route exact path="/Registrar" element={<Registrar/>} />
        <Route exact path="/Nosotros" element={<Nosotros/>} />
        <Route exact path="/Contacto" element={<Contacto/>} />
        <Route exact path="/Recuperar" element={<Recuperar/>} />
        <Route exact path="/App" element={<App/>} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

