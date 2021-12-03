import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import Home from '../src/componentes/home/Home';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; // Archivo CSS de Bootstrap 4 
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

