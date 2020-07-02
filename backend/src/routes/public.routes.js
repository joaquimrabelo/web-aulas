const express = require('express');
const publicRoutes = express.Router();

publicRoutes.get('/', (request, response) => {
  response.json({'api': 'API Web Aulas'});
});

publicRoutes.get('/config', (request, response) => {
  const config = {
    title: 'Web Aulas',
    logo: 'logo.png',
    backgroundImage: 'foto-back.jpg',
    primaryColor: '#0c5a9a',
    secondaryColor: '#83c6db',
  }
  response.json(config);
});

module.exports = publicRoutes;