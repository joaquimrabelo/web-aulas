const express = require('express');
const cors = require('cors');
const router = require('./routes');
const config = require('./config');

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(config.node.port, function() {
  console.log('started');
});