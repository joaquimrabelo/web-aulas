const express = require('express');
const courseRoutes = express.Router();

const checkAuthPainel = require('../middleware/checkAuthPainel');
const CourseController = require('../controllers/painel/CourseController');

courseRoutes.get('/cursos', checkAuthPainel, CourseController.index);
courseRoutes.get('/cursos/:id', checkAuthPainel, CourseController.show);
courseRoutes.post('/cursos', checkAuthPainel, CourseController.store);
courseRoutes.put('/cursos/:id', checkAuthPainel, CourseController.update);
courseRoutes.delete('/cursos/:id', checkAuthPainel, CourseController.delete);
courseRoutes.put('/cursos/:id', checkAuthPainel, CourseController.updateOrdem);

module.exports = courseRoutes;