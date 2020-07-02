const express = require('express');
const cors = require('cors');
const swaggerDoc = require('../src/docs/swaggerConfig');
const router = require('./routes');

require('dotenv').config();

require('./database/connection');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

swaggerDoc(app);

app.listen(process.env.NODE_PORT, function() {
  console.log('started');
});