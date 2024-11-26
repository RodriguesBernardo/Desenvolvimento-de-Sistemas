import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LivroList from './components/LivroList';
import LivroForm from './components/LivroForm';
import LivroDetalhes from './components/LivroDetalhes';
import './styles/index.css';

const App = () => {
  const [livros, setLivros] = useState([]);

  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LivroList livros={livros} setLivros={setLivros} />} />
          <Route path="/novo" element={<LivroForm setLivros={setLivros} />} />
          <Route path="/editar/:id" element={<LivroForm setLivros={setLivros} />} />
          <Route path="/livro/:id" element={<LivroDetalhes />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
