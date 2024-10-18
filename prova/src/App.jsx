import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import LivroList from './components/LivroList';
import LivroForm from './components/LivroForm';
import LivroDetalhes from './components/LivroDetalhe';
import axios from 'axios';

function App() {
  const [livros, setLivros] = useState([]);

  // Função para buscar os livros da API
  const fetchLivros = () => {
    axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
      .then(response => setLivros(response.data))
      .catch(error => console.error('Erro ao buscar os livros:', error));
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<LivroList livros={livros} setLivros={setLivros} />} />
      <Route path="/novo" element={<LivroForm setLivros={setLivros} />} />
      <Route path="/livro/:id" element={<LivroDetalhes />} />
      <Route path="/editar/:id" element={<LivroForm livros={livros} setLivros={setLivros} />} />
    </Routes>
  );
}

export default App;
