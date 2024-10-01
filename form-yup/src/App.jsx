import React from 'react';
import './App.css';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function App() {
  const initialValues = {
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: true,
  };

  const validationSchema = Yup.object().shape({
    fullname: Yup.string().required('Nome completo é obrigatório'),
    username: Yup.string().required('Usuário é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    password: Yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'As senhas devem ser iguais')
      .required('Confirmação de senha é obrigatória'),
    acceptTerms: Yup.boolean().oneOf([true], 'Você deve aceitar os termos'),
  });

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="register-form">
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ errors, touched, resetForm }) => (
          <Form>
            <div className="form-group">
              <label>Nome Completo</label>
              <Field
                name="fullname"
                type="text"
                className={'form-control' + (errors.fullname && touched.fullname ? ' is-invalid' : '')}
              />
              <ErrorMessage name="fullname" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="username">Usuário</label>
              <Field
                name="username"
                type="text"
                className={'form-control' + (errors.username && touched.username ? ' is-invalid' : '')}
              />
              <ErrorMessage name="username" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                name="email"
                type="email"
                className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')}
              />
              <ErrorMessage name="email" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="password">Senha</label>
              <Field
                name="password"
                type="password"
                className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')}
              />
              <ErrorMessage name="password" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirme a Senha</label>
              <Field
                name="confirmPassword"
                type="password"
                className={
                  'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')
                }
              />
              <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group form-check">
              <Field
                name="acceptTerms"
                type="checkbox"
                className={
                  'form-check-input' + (errors.acceptTerms && touched.acceptTerms ? ' is-invalid' : '')
                }
              />
              <label htmlFor="acceptTerms" className="form-check-label">
                Eu li e concordo com os termos
              </label>
              <ErrorMessage name="acceptTerms" component="div" className="invalid-feedback" />
            </div>

            <div className="form-group">
              <button type="submit" className="btn btn-primary">
                Submeter
              </button>
              <button type="button" onClick={resetForm} className="btn btn-warning float-right">
                Limpar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
