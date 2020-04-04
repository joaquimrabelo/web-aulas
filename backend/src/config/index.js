const dotenv = require('dotenv');
dotenv.config();

const config = {
  node: {
    env: process.env.NODE_ENV,
    port: process.env.NODE_PORT,
  }
};

module.exports = config;