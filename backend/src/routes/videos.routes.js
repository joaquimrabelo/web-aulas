const express = require('express');
const videoRoutes = express.Router();

const checkAuthPainel = require('../middleware/checkAuthPainel');
const VideoController = require('../controllers/painel/VideoController');

videoRoutes.get('/videos', checkAuthPainel, VideoController.index);
videoRoutes.get('/videos/:id', checkAuthPainel, VideoController.show);
videoRoutes.post('/videos', checkAuthPainel, VideoController.store);
videoRoutes.put('/videos/:id', checkAuthPainel, VideoController.update);
videoRoutes.delete('/videos/:id', checkAuthPainel, VideoController.delete);

module.exports = videoRoutes;