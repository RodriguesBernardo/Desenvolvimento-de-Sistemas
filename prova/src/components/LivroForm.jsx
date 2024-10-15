import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const LivroForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [livro, setLivro] = useState({
    title: '',
    description: '',
    author: '',
    publishDate: ''
  });

  useEffect(() => {
    if (id) {
      // Se existir um ID, estamos editando; busca os dados do livro
      axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
        .then(response => setLivro(response.data))
        .catch(error => console.error('Erro ao buscar o livro:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const apiURL = id
      ? `https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`  // Editar livro existente
      : 'https://fakerestapi.azurewebsites.net/api/v1/Books';  // Criar novo livro

    const method = id ? 'put' : 'post';

    axios[method](apiURL, livro)
      .then(() => {
        alert(`Livro ${id ? 'editado' : 'criado'} com sucesso!`);
        navigate('/');
      })
      .catch(error => console.error('Erro ao salvar o livro:', error));
  };

  return (
    <div className="container">
      <h1>{id ? 'Editar Livro' : 'Novo Livro'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input type="text" name="title" value={livro.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Descrição</label>
          <textarea name="description" value={livro.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Autor</label>
          <input type="text" name="author" value={livro.author} onChange={handleChange} required />
        </div>
        <div>
          <label>Data de Publicação</label>
          <input type="date" name="publishDate" value={livro.publishDate} onChange={handleChange} required />
        </div>
        <button type="submit">{id ? 'Salvar Alterações' : 'Adicionar Livro'}</button>
      </form>
    </div>
  );
};

export default LivroForm;
