import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const LivroDetalhe = () => {
  const { id } = useParams(); // Pega o ID do livro da URL
  const [livro, setLivro] = useState(null); // Estado para armazenar os detalhes do livro
  const navigate = useNavigate(); // Hook para navegação entre páginas

  useEffect(() => {
    // Faz a requisição para a Google Books API
    axios.get(`https://www.googleapis.com/books/v1/volumes/${id}`)
      .then(response => setLivro(response.data)) // Armazena os detalhes do livro
      .catch(error => console.error('Erro ao buscar o livro:', error));
  }, [id]);

  if (!livro) return <p>Carregando detalhes do livro...</p>;

  return (
    <div className="container">
      <h1>{livro.volumeInfo.title}</h1>
      <p>{livro.volumeInfo.description || 'Descrição não disponível.'}</p>
      <p><strong>Autores: </strong>{livro.volumeInfo.authors?.join(', ') || 'Autor não disponível.'}</p>
      <p><strong>Data de Publicação: </strong>{livro.volumeInfo.publishedDate || 'Data não disponível.'}</p>

      <button onClick={() => navigate(-1)}>Voltar</button> {/* Botão para voltar */}
    </div>
  );
};

export default LivroDetalhes;
