require('dotenv').config();
const connectDB = require('./config/database');
const app = require('./app');

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
