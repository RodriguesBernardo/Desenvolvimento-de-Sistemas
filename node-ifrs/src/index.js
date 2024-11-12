// Importa o módulo do Express
const express = require("express");
// importa somente a função uuidv4 do módulo uuid
const { v4: uuidv4 } = require("uuid");
// Cria uma aplicação Express
const app = express();
// Configura o parser para requisições com JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/courses", (req, res) => {
  // Usa Desestruturação para pegar os campos enviados pelo body
  const { name, type } = req.body;
  // Adiciona um novo UUID
  const newCourse = { id: uuidv4(), name, type };
  // Acrescenta este novo curso no final do array
  courses.push(newCourse);
  // Retorna o novo curso criado
  res.json(newCourse);
});

// Define a rota /courses com o parâmetro id para o verbo put
app.put("/courses/:id", (req, res) => {
  // Busca o parametro id da requisição
  const { id } = req.params;
  // Pega os dados vindos via body da requisição
  const body = req.body;
  // Verifica se este id existe no array de courses e retorna seu índice
  const courseIndex = courses.findIndex((course) => course.id === id);
  if (courseIndex < 0) {
    return res.status(500).json({ error: "Curso não encontrado!" });
  }
  // Cria um registro com os dados atualizados
  const updatedCourse = { id, ...body };
  // Sobrescreve o registro no array
  courses[courseIndex] = updatedCourse;
  // Retorna o registro atualizado
  res.json(updatedCourse);
});

app.delete("/courses/:id", (req, res) => {
  // Busca o parametro id da requisição
  const { id } = req.params;
  // Verifica se este id existe no array de courses e retorna seu índice
  const courseIndex = courses.findIndex((course) => course.id === id);
  if (courseIndex < 0) {
    return res.status(500).json({ error: "Curso não encontrado!" });
  }
  // Remove o curso do array
  courses.splice(courseIndex, 1);
  res.status(200).json({ msg: "Curso excluído com sucesso!" });
});
