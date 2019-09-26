const express = require ('express');
const rotas = express.Router();
const controller = require('./controller/user');

rotas.post('/cadastrar', controller.cadastrar);
rotas.get('/listar', controller.listar);
rotas.get('/listar/:id', controller.encontrar);
rotas.get('/listar/:id', controller.deletar);
rotas.post('/listar/atualizar/:id', controller.atualizar);

module.exports = rotas;