const Livro = require('../models/livro');

exports.getLivros = async (req, res) => {
  try {
    const livros = await Livro.find();
    res.status(200).json(livros);
  } catch (error) {
    console.error('Erro ao buscar livros:', error);
    res.status(500).json({ message: 'Erro ao buscar os livros.' });
  }
};

exports.getLivro = async (req, res) => {
  try {
    const livro = await Livro.findById(req.params.id);
    if (!livro) return res.status(404).json({ message: 'Livro não encontrado.' });
    res.status(200).json(livro);
  } catch (error) {
    console.error('Erro ao buscar o livro:', error);
    res.status(500).json({ message: 'Erro ao buscar o livro.' });
  }
};

exports.createLivro = async (req, res) => {
  try {
    const novoLivro = new Livro(req.body);
    const livroCriado = await novoLivro.save();
    res.status(201).json(livroCriado);
  } catch (error) {
    console.error('Erro ao criar o livro:', error);
    res.status(400).json({ message: 'Erro ao criar o livro.' });
  }
};

exports.updateLivro = async (req, res) => {
  try {
    const livroAtualizado = await Livro.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!livroAtualizado) return res.status(404).json({ message: 'Livro não encontrado.' });
    res.status(200).json(livroAtualizado);
  } catch (error) {
    console.error('Erro ao atualizar o livro:', error);
    res.status(400).json({ message: 'Erro ao atualizar o livro.' });
  }
};

exports.deleteLivro = async (req, res) => {
  try {
    const livroExcluido = await Livro.findByIdAndDelete(req.params.id);
    if (!livroExcluido) return res.status(404).json({ message: 'Livro não encontrado.' });
    res.status(200).json({ message: 'Livro excluído com sucesso.' });
  } catch (error) {
    console.error('Erro ao excluir o livro:', error);
    res.status(500).json({ message: 'Erro ao excluir o livro.' });
  }
};
