const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000; // Definindo a porta padrão como 3000

// Configura o parser para requisições com JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota pública
app.get("/publica", (req, res) => {
  res.json({ message: "Acesso ao recurso público" });
});

// Middleware para verificar o token JWT nas rotas protegidas
function verifyToken(req, res, next) {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(401).json({ message: "Token não fornecido" });
  }

  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token inválido" });
    }
    req.userId = decoded.id;
    next();
  });
}

// Rota privada protegida com JWT
app.get("/privada", verifyToken, (req, res) => {
  res.json({ message: "Acesso ao recurso protegido permitido" });
});

// Rota para login, que gera o token JWT
app.post("/login", (req, res) => {
  const { username, password } = req.body;

  // Verifica se o usuário e senha são válidos
  if (username === "usuario" && password === "senha") {
    const id = 1; // Id do usuário vindo do "banco de dados"
    const token = jwt.sign({ id }, process.env.SECRET, {
      expiresIn: 300, // Token expira em 5 minutos
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Credenciais inválidas" });
  }
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Serviço iniciado na porta ${port}`);
});
