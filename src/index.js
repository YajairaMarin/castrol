import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import App2 from './App2';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<App/>} />
        <Route path="/index" element={<App2/>} />
      </Routes>
    </Router>

  </React.StrictMode>,
  document.getElementById('root')
);

