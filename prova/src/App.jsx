import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LivroList from './components/LivroList';
import LivroDetalhes from './components/LivroDetalhes';
import LivroForm from './components/LivroForm';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LivroList />} />
        <Route path="/livro/:id" element={<LivroDetalhes />} />
        <Route path="/novo" element={<LivroForm />} />
        <Route path="/editar/:id" element={<LivroForm />} />
      </Routes>
    </Router>
  );
}

export default App;
