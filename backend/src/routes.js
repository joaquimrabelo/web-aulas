const express = require('express');

const SessionsController = require('./controllers/SessionsController');
const checkAuthPainel = require('./services/checkAuthPainel');

const PerfilController = require('./controllers/painel/PerfilController');

const CouseController = require('./controllers/painel/CourseController');
const VideoController = require('./controllers/painel/VideoController');
const FileController = require('./controllers/painel/FileController');

const router = express.Router();

router.get('/', (request, response) => {
  response.json({'api': 'API Web Aulas'});
});

/* Rotas painel */
router.post('/painel/login', SessionsController.doPainelLogin);
router.get('/painel/perfil', checkAuthPainel, PerfilController.index);

router.get('/cursos', checkAuthPainel, CouseController.index);
router.get('/cursos/:id', checkAuthPainel, CouseController.show);
router.post('/cursos', checkAuthPainel, CouseController.store);
router.put('/cursos/:id', checkAuthPainel, CouseController.update);
router.delete('/cursos/:id', checkAuthPainel, CouseController.delete);
router.put('/cursos/:id', checkAuthPainel, CouseController.updateOrdem);

router.get('/videos', checkAuthPainel, VideoController.index);
router.get('/videos/:id', checkAuthPainel, VideoController.show);
router.post('/videos', checkAuthPainel, VideoController.store);
router.put('/videos/:id', checkAuthPainel, VideoController.update);
router.delete('/videos/:id', checkAuthPainel, VideoController.delete);

router.get('/arquivos', checkAuthPainel, FileController.index);
router.get('/arquivos/:id', checkAuthPainel, FileController.show);
router.post('/arquivos', checkAuthPainel, FileController.store);
router.put('/arquivos/:id', checkAuthPainel, FileController.update);
router.delete('/arquivos/:id', checkAuthPainel, FileController.delete);

/* Rotas site */

module.exports = router;