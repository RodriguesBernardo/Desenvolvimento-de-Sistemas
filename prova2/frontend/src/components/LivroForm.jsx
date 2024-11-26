import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_URL } from '../api';

const schema = yup.object().shape({
  title: yup.string().required('O título é obrigatório'),
  description: yup.string().required('A descrição é obrigatória'),
  author: yup.string().required('O autor é obrigatório'),
  publishDate: yup.date().required('A data de publicação é obrigatória'),
});

const LivroForm = ({ setLivros }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (id) {
      axios.get(`${API_URL}/${id}`).then((response) => {
        const { title, description, author, publishDate } = response.data;
        setValue('title', title);
        setValue('description', description);
        setValue('author', author);
        setValue('publishDate', publishDate.split('T')[0]);
      });
    }
  }, [id, setValue]);
  

  const onSubmit = async (data) => {
    const method = id ? 'put' : 'post';
    const apiURL = id ? `${API_URL}/${id}` : API_URL;

    try {
      const response = await axios[method](apiURL, data);
      alert(`Livro ${id ? 'editado' : 'criado'} com sucesso!`);
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
