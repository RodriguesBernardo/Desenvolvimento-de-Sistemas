import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LivroList = () => {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchLivros = () => {
    setLoading(true);
    axios.get('https://fakerestapi.azurewebsites.net/api/v1/Books')
      .then(response => {
        setLivros(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao buscar livros:', error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLivros();
  }, []);

  const deleteLivro = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
      axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
        .then(() => {
          alert('Livro excluído com sucesso!');
          setLivros(livros.filter(livro => livro.id !== id));
        })
        .catch(error => console.error('Erro ao excluir o livro:', error));
    }
  };

  return (
    <div className="container">
      <h1>Lista de Livros</h1>
      <Link to="/novo">
        <button>Novo Livro</button>
      </Link>
      {loading && <p>Carregando...</p>}
      <ul className="book-list">
        {livros.map(livro => (
          <li key={livro.id} className="book-item">
            <h2>{livro.title}</h2>
            <p>{livro.description}</p>
            <Link to={`/livro/${livro.id}`}>
              <button>Ver Detalhes</button>
            </Link>
            <Link to={`/editar/${livro.id}`}>
              <button>Editar</button>
            </Link>
            <button onClick={() => deleteLivro(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivroList;
