import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const schema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
  author: yup.string().required('O autor é obrigatório'),
  publishDate: yup.date().required('A data de publicação é obrigatória')
});

const LivroForm = ({ setLivros }) => {
  const { id } = useParams();
  const navigate = useNavigate();

 
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (id) {
      axios.get(`https://fakerestapi.azurewebsites.net/api/v1/Books/${id}`)
        .then(response => {
          const { title, description, author, publishDate } = response.data;
          setValue('title', title);
          setValue('description', description);
          setValue('author', author);
          setValue('publishDate', publishDate.split('T')[0]); 
        })
        .catch(error => {
          console.error('Erro ao buscar o livro:', error);
          alert('Erro ao carregar os dados do livro.');
        });
    }
  }, [id, setValue]);

  const onSubmit = async (data) => {
    const formattedDate = new Date(data.publishDate).toISOString();

    const livroData = {
      title: data.title,
      description: data.description,
      author: data.author,
      publishDate: formattedDate,
    };

    const apiURL = id
      ? `https://fakerestapi.azurewebsites.net/api/v1/Books/${id}` 
      : 'https://fakerestapi.azurewebsites.net/api/v1/Books';

    const method = id ? 'put' : 'post';

    try {
      const response = await axios[method](apiURL, livroData);
      alert(`Livro ${id ? 'editado' : 'criado'} com sucesso!`);

      if (id) {
        setLivros(prevLivros => prevLivros.map(l => (l.id === parseInt(id) ? response.data : l)));
      } else {
        const newLivro = {
          ...response.data,
          id: response.data.id || Date.now(), 
        };
        setLivros(prevLivros => [...prevLivros, newLivro]);
      }

      navigate('/');
    } catch (error) {
      console.error('Erro ao salvar o livro:', error);
      alert('Erro ao salvar o livro. Verifique os dados e tente novamente.');
    }
  };

  return (
    <div className="container">
      <h1>{id ? 'Editar Livro' : 'Novo Livro'}</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Título</label>
          <input type="text" {...register('title')} />
          {errors.title && <p className="error-message">{errors.title.message}</p>}
        </div>
        <div>
          <label>Descrição</label>
          <textarea {...register('description')} />
          {errors.description && <p className="error-message">{errors.description.message}</p>}
        </div>
        <div>
          <label>Autor</label>
          <input type="text" {...register('author')} />
          {errors.author && <p className="error-message">{errors.author.message}</p>}
        </div>
        <div>
          <label>Data de Publicação</label>
          <input type="date" {...register('publishDate')} />
          {errors.publishDate && <p className="error-message">{errors.publishDate.message}</p>}
        </div>
        <button type="submit">{id ? 'Salvar Alterações' : 'Adicionar Livro'}</button>
      </form>
    </div>
  );
};

export default LivroForm;
