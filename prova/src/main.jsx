import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App'; // Certifique-se de que o caminho para o App está correto
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);
