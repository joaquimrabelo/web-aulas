const express = require('express');

const SessionsController = require('./controllers/SessionsController');
const checkAuthPainel = require('./services/checkAuthPainel');

const PerfilController = require('./controllers/painel/PerfilController');

const CouseController = require('./controllers/painel/CourseController');

const router = express.Router();

router.get('/', (request, response) => {
  response.json({'api': 'API Web Aulas'});
});

/* Rotas painel */
router.post('/painel/login', SessionsController.doPainelLogin);

router.get('/painel/perfil', checkAuthPainel, PerfilController.index);
router.get('/courses', checkAuthPainel, CouseController.index);
router.get('/courses/:id', checkAuthPainel, CouseController.show);
router.post('/courses', checkAuthPainel, CouseController.store);

/* Rotas site */

module.exports = router;