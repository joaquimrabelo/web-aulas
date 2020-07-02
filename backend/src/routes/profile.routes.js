const express = require('express');
const profileRoutes = express.Router();

const checkAuthPainel = require('../middleware/checkAuthPainel');
const PerfilController = require('../controllers/painel/PerfilController');

profileRoutes.get('/painel/perfil', checkAuthPainel, PerfilController.index);

module.exports = profileRoutes;