import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LivroList = () => {
  const [livros, setLivros] = useState([]);
  const [query, setQuery] = useState(''); // Estado para armazenar a query de busca
  const [loading, setLoading] = useState(false); // Estado para o loading

  const handleSearch = (e) => {
    e.preventDefault();
    setLoading(true); // Inicia o loading

    // Faz a requisição para a Google Books API
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)
      .then(response => {
        setLivros(response.data.items || []); // Armazena os livros encontrados
        setLoading(false); // Finaliza o loading
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error);
        setLoading(false); // Finaliza o loading em caso de erro
      });
  };

  return (
    <div className="container">
      <h1>Lista de Livros</h1>
      <form onSubmit={handleSearch}>
        <input 
          type="text" 
          value={query} 
          onChange={(e) => setQuery(e.target.value)} 
          placeholder="Digite o título do livro" 
          required 
        />
        <button type="submit">Buscar</button>
      </form>
      
      {loading && <p>Carregando...</p>}

      <ul className="book-list">
        {livros.map(livro => (
          <li key={livro.id} className="book-item">
            <h2>{livro.volumeInfo.title}</h2>
            <p>{livro.volumeInfo.description || 'Descrição não disponível.'}</p>
            <Link to={`/livro/${livro.id}`}>
              <button>Ver Detalhes</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivroList;
