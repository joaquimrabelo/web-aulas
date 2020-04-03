const express = require('express');
const sequelize = require('./database/sequelize');

const router = express.Router();

const port = process.env.PORT;
console.log('porta: ' + port);

router.get('/', (request, response) => {
  response.json({'api': 'API Web Aulas'});
});

module.exports = router;