import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../api';

const LivroDetalhes = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`).then((response) => setLivro(response.data));
  }, [id]);

  return (
    <div className="container">
      {livro ? (
        <>
          <h1>{livro.title}</h1>
          <p>{livro.description}</p>
          <p><strong>Autor: </strong>{livro.author}</p>
          <p><strong>Data de Publicação: </strong>{livro.publishDate}</p>
          <button onClick={() => window.history.back()}>Voltar</button>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default LivroDetalhes;
