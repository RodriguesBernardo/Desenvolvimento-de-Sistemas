import { useForm } from 'react-hook-form';
import './App.css';

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="nomeCompleto">Nome Completo:</label>
          <input
            type="text"
            name="nomeCompleto"
            className="form-control"
            {...register('nomeCompleto', { required: 'Nome completo é obrigatório' })}
          />
          {errors.nomeCompleto && <p role="alert">{errors.nomeCompleto.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="apelido">Nome de usuário:</label>
          <input
            type="text"
            name="apelido"
            className="form-control"
            {...register('apelido', {
              required: 'Nome de usuário é obrigatório',
              minLength: {
                value: 6,
                message: 'Nome de usuário deve ter no mínimo 6 caracteres'
              },
              maxLength: {
                value: 20,
                message: 'Nome de usuário deve ter no máximo 20 caracteres'
              }
            })}
          />
          {errors.apelido && <p role="alert">{errors.apelido.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            className="form-control"
            {...register('email', {
              required: 'Email é obrigatório',
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i,
                message: 'Formato de email inválido'
              }
            })}
          />
          {errors.email && <p role="alert">{errors.email.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="senha">Senha:</label>
          <input
            type="password"
            name="senha"
            className="form-control"
            {...register('senha', {
              required: 'Senha é obrigatória',
              minLength: {
                value: 6,
                message: 'Senha deve ter no mínimo 6 caracteres'
              },
              maxLength: {
                value: 40,
                message: 'Senha deve ter no máximo 40 caracteres'
              }
            })}
          />
          {errors.senha && <p role="alert">{errors.senha.message}</p>}
        </div>

        <div className="form-group">
          <label htmlFor="confirmarSenha">Confirmar Senha:</label>
          <input
            type="password"
            name="confirmarSenha"
            className="form-control"
            {...register('confirmarSenha', {
              required: 'Confirmação de senha é obrigatória',
              validate: (value) =>
                value === watch('senha') || 'As senhas não correspondem'
            })}
          />
          {errors.confirmarSenha && <p role="alert">{errors.confirmarSenha.message}</p>}
        </div>

        <div className="form-group">
          <label>
            <input
              type="checkbox"
              name="termos"
              {...register('termos', {
                required: 'Você deve aceitar os termos e condições'
              })}
            />
            Aceito os termos e condições
          </label>
          {errors.termos && <p role="alert">{errors.termos.message}</p>}
        </div>

        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default App;
