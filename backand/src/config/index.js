const dotenv = require('dotenv');
dotenv.config();

const config = {
  node: {
    env: process.env.NODE_ENV,
    port: process.env.NODE_PORT,
  },
  database: {
    connection: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  }
};

module.exports = config;