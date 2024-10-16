import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const LivroForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [livro, setLivro] = useState({
    title: '',
    body: '', // JSONPlaceholder usa "body" para o conteúdo
    userId: 1, // Necessário para criar um "post"
  });

  useEffect(() => {
    if (id) {
      // Se existir um ID, estamos editando; busca os dados do "livro"
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => setLivro(response.data))
        .catch(error => console.error('Erro ao buscar o post:', error));
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLivro(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const apiURL = id
      ? `https://jsonplaceholder.typicode.com/posts/${id}`  // Editar livro existente (post)
      : 'https://jsonplaceholder.typicode.com/posts';  // Criar novo livro (post)

    const method = id ? 'put' : 'post';

    axios[method](apiURL, livro)
      .then(response => {
        console.log('Resposta da API:', response);
        alert(`Post ${id ? 'editado' : 'criado'} com sucesso!`);
        navigate('/');
      })
      .catch(error => {
        console.error('Erro ao salvar o post:', error.response ? error.response.data : error);
        alert('Erro ao salvar o post. Verifique os dados e tente novamente.');
      });
  };

  return (
    <div className="container">
      <h1>{id ? 'Editar Post' : 'Novo Post'}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={livro.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Descrição</label>
          <textarea
            name="body" // Adaptando para o campo "body" do JSONPlaceholder
            value={livro.body}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">{id ? 'Salvar Alterações' : 'Adicionar Post'}</button>
      </form>
    </div>
  );
};

export default LivroForm;
