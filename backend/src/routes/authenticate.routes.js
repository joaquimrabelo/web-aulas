const express = require('express');
const authenticateRoutes = express.Router();

const SessionsController = require('../controllers/painel/SessionsController');

authenticateRoutes.post('/painel/login', SessionsController.doPainelLogin);

module.exports = authenticateRoutes;