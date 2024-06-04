const express = require("express");
const path = require("path");
const app = express();

// Serve os arquivos estáticos da aplicação Angular
app.use(express.static(path.join(__dirname, "dist")));

// Redireciona todas as requisições para o index.html
app.get("/*", function (req, res) {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

// Inicia o servidor na porta 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
