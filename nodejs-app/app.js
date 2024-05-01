const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const lodash = require('lodash'); // Pacote com uma vulnerabilidade conhecida (CVE-2019-10744)
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Rota vulnerável a SQL Injection
app.get('/search', (req, res) => {
  const searchTerm = req.query.term;
  const sql = `SELECT * FROM products WHERE name = '${searchTerm}'`; // Vulnerável a SQL Injection
  // Executa a consulta SQL...
});


// Rota vulnerável a XSS (Cross-Site Scripting)
app.get('/user/:name', (req, res) => {
  const userName = req.params.name;
  res.send(`<h1>Welcome, ${userName}</h1>`); // Vulnerável a XSS
});

// Rota vulnerável a CSRF (Cross-Site Request Forgery)
app.post('/transfer', (req, res) => {
  const amount = req.body.amount;
  // Transfere a quantidade especificada para um destinatário (não implementado aqui)
});

// Rota vulnerável a RCE (Remote Code Execution)
app.get('/execute', (req, res) => {
  const command = req.query.command;
  // Executa o comando especificado no servidor (não implementado aqui)
});

// Rota que expõe dados sensíveis
app.get('/user/profile', (req, res) => {
  const userId = req.cookies.userId;
  // Retorna o perfil do usuário com o ID especificado (não implementado aqui)
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
