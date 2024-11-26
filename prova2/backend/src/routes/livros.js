const express = require('express');
const router = express.Router();
const {
  getLivros,
  getLivro,
  createLivro,
  updateLivro,
  deleteLivro,
} = require('../controllers/livrosController');

router.get('/', getLivros);
router.get('/:id', getLivro);
router.post('/', createLivro);
router.put('/:id', updateLivro);
router.delete('/:id', deleteLivro);

module.exports = router;
