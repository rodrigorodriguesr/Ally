const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar a conexão com o MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',         // Substitua pelo seu usuário do MySQL
    password: '262728',         // Substitua pelo seu password do MySQL
    database: 'plataforma_login'  // Nome do banco de dados
});

db.connect((err) => {
    if (err) throw err;
    console.log('Conectado ao MySQL');
});

// Rota para registrar novos usuários (opcional, se você tiver um 
