const express = require('express');
const router = express.Router();

const SessionsController = require('../controllers/painel/SessionsController');
const checkAuthPainel = require('../middleware/checkAuthPainel');

const PerfilController = require('../controllers/painel/PerfilController');

const courseRoutes = require('./courses.routes');
const videoRoutes = require('./videos.routes');
const fileRoutes = require('./files.routes');


router.get('/', (request, response) => {
  response.json({'api': 'API Web Aulas'});
});

/* Rotas painel */

router.use(courseRoutes);
router.use(videoRoutes);
router.use(fileRoutes);

router.post('/painel/login', SessionsController.doPainelLogin);
router.get('/painel/perfil', checkAuthPainel, PerfilController.index);


/* Rotas site */

module.exports = router;