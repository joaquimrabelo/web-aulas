const express = require('express');
const fileRoutes = express.Router();

const checkAuthPainel = require('../middleware/checkAuthPainel');
const FileController = require('../controllers/painel/FileController');

fileRoutes.get('/arquivos', checkAuthPainel, FileController.index);
fileRoutes.get('/arquivos/:id', checkAuthPainel, FileController.show);
fileRoutes.post('/arquivos', checkAuthPainel, FileController.store);
fileRoutes.put('/arquivos/:id', checkAuthPainel, FileController.update);
fileRoutes.delete('/arquivos/:id', checkAuthPainel, FileController.delete);

module.exports = fileRoutes;