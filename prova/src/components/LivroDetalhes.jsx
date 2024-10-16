import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const LivroDetalhes = () => {
  const { id } = useParams();
  const [livro, setLivro] = useState(null);

  useEffect(() => {
    // Consumindo a API Fake para buscar os detalhes de um livro específico
    axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
      .then(response => setLivro(response.data))
      .catch(error => console.error('Erro ao buscar o livro:', error));
  }, [id]);

  if (!livro) return <p>Carregando detalhes do livro...</p>;

  return (
    <div className="container">
      <h1>{livro.title}</h1>
      <p>{livro.description}</p>
      <p><strong>Autor: </strong>{livro.author}</p>
      <p><strong>Data de Publicação: </strong>{livro.publishDate}</p>
      <button onClick={() => window.history.back()}>Voltar</button>
    </div>
  );
};

export default LivroDetalhes;
