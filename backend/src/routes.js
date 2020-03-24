const express = require('express');

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();


/**
 * ROTAS
 */

//Rota de login
routes.post('/sessions', SessionController.create);

//Rota de listar ongs
routes.get('/ongs', OngController.index);

//Rota de criar ong
routes.post('/ongs', OngController.create);

//Rota de listar ongs
routes.get('/profile', ProfileController.index);

//Rota de criar caso
routes.post('/incidents', IncidentController.create);

//Rota de listar todos os casos do banco
routes.get('/incidents', IncidentController.index);

//Rota de deletar caso
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;