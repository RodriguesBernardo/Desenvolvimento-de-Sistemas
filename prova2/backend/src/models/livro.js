const mongoose = require('mongoose');

const livroSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  publishDate: { type: Date, required: true },
});

module.exports = mongoose.model('Livro', livroSchema);
