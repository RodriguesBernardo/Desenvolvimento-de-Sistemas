import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const LivroList = ({ livros, setLivros }) => {
  
  const deleteLivro = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este livro?')) {
      axios.delete(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
        .then(() => {
          setLivros(livros.filter(livro => livro.id !== id)); // Atualiza a lista de livros localmente
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
            <button class='buttonError' onClick={() => deleteLivro(livro.id)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LivroList;
