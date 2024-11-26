import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_URL } from '../api';
import '../styles/app.css';

const LivroList = ({ livros, setLivros }) => {
  useEffect(() => {
    axios
      .get(API_URL)
      .then((response) => setLivros(response.data))
      .catch((error) => console.error('Erro ao buscar livros:', error));
  }, [setLivros]);

  const deleteLivro = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
      axios
        .delete(`${API_URL}/${id}`)
        .then(() => {
          setLivros((prevLivros) => prevLivros.filter((livro) => livro.id !== id));
          axios
          .get(API_URL)
          .then((response) => setLivros(response.data))
          .catch((error) => console.error('Erro ao buscar livros:', error));
        })
        .catch((error) => {
          console.error('Erro ao excluir o livro:', error);
          alert('Não foi possível excluir o livro. Tente novamente.');
        });
    }
  };

  return (
    <div className="container">
      <h1>Lista de Livros</h1>
      <Link to="/novo">
        <button className="button">Novo Livro</button>
      </Link>
      <ul className="book-list">
  {livros.map((livro) => (
    <li key={livro._id} className="book-item">
      <h2>{livro.title}</h2>
      <p>{livro.description}</p>
      <Link to={`/livro/${livro._id}`}>
        <button className="button">Ver Detalhes</button>
      </Link>
      <Link to={`/editar/${livro._id}`}>
        <button className="button">Editar</button>
      </Link>
      <button className="buttonError" onClick={() => deleteLivro(livro._id)}>
        Excluir
      </button>
    </li>
  ))}
</ul>

    </div>
  );
};

export default LivroList;
