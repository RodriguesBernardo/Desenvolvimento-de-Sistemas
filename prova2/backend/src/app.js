const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const livrosRoutes = require('./routes/livros');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api/livros', livrosRoutes);

module.exports = app;
