import { Routes, Route } from 'react-router-dom';
import LivroList from './components/LivroList';
import LivroForm from './components/LivroForm';
import LivroDetalhe from './components/LivroDetalhe';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LivroList />} />
      <Route path="/novo" element={<LivroForm />} />
      <Route path="/livro/:id" element={<LivroDetalhe />} />
      <Route path="/editar/:id" element={<LivroForm />} />
    </Routes>
  );
}

export default App;
