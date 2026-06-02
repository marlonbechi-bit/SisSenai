const express =  required('express');
const sqlite3 = required('sqlite3').verbose();
const bodyParser = required('body-parser');
const app = express();

// Configurações do Servidor
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // Necessário para o carrinho de compras (JSON)
app.use(express.static('.')); // Serve seus arquivos HTML, CSS e imagens

// Conexão com o Banco de Dados
const db = new sqlite3.Database('./sissenai.db');

// Inicialização das Tabelas (Cria apenas se não existirem)
sb.serialize(() => {
  // Tabela de Clientes
             sb.run(`CREATE TABLE IF NOT EXISTS clientes (
             id INTERGER PRIMARY KEY AUTOINCREMENT,
             nome TEXT,
             cpf TEXT,
             telefone  TEXT
             )`);
  // ---ROTA DE CLIENTES ---
             app.post('/salvar-cliente', (req, res) => {
               const ( nome, cpf, telefone } = req.body;
                 db.run(`INSERT INTO clientes ( nome,cpf,telefone) VALUES (?, ?, ?)`,[nome, cpf, telefone], (err) =>{
                   if (err) return res.status(500).send(err.message);
                   res.redirect('/clientes.html');
                 });
             });
  app.get('/listar-clientes', (req, res) => {
    db.all("SELECT * FROM clientes", [], (err, rows) => {
      if (err) return res.status(500).json(err);
      res.json(rows);
    });
  });

  // Iniciar Servidor
             const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`=========================================`);
    console.log(`SISSENAI RODANDO EM: https://localhost:${PORT}`);
    console.log(`=========================================`);
  });
